<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <!-- Main Title -->
    <div class="maintitle" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
      <span>Recent Publications</span>
    </div>

    <!-- Featured Publications -->
    <div class="publication-list">
      <div
        v-for="(pub, index) in featuredPublications"
        :key="'featured-' + index"
        class="publication-line"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <div class="publication-content">
          <div class="thumbnail">
            <img
              :src="getDefaultThumbnail(pub)"
              :alt="pub.name"
              class="publication-thumbnail"
              @error="handleImageError"
            />
          </div>
          <div class="publication-info">
            <div class="title">{{ pub.name }}</div>
            <div class="authors" v-html="formatAuthors(pub.authors)"></div>
            <div class="journal">{{ pub.journal }}</div>
            <div class="links">
              <button v-if="pub.description" @click="toggleAbstract('arxiv-' + index)" class="paper-box abstract-btn">abstract</button>
              <a v-if="pub.paper_link" :href="pub.paper_link" target="_blank" class="paper-box">paper</a>
              <a v-if="pub.video_link" :href="pub.video_link" target="_blank" class="paper-box">video</a>
              <a v-if="pub.dataset_link" :href="pub.dataset_link" target="_blank" class="paper-box">dataset</a>
              <a v-if="pub.visit" :href="pub.visit" target="_blank" class="paper-box">website</a>
            </div>
          </div>
        </div>
        <!-- Abstract toggle for arxiv -->
        <div v-if="showAbstract['arxiv-' + index]" class="abstract-content">
          <div class="abstract-text" v-html="pub.description"></div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "SelectedPublication",
  props: {
    nightMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      featuredPublications: [],
      showAbstract: {}
    };
  },
  methods: {
    // authors 문자열 내에서 "JooYeong Kim"을 찾아 <u> 태그로 감싸 반환
    formatAuthors(authors) {
      return authors.replace(/JooYeong Kim/g, '<u>JooYeong Kim</u>');
    },

    // 썸네일 이미지 가져오기
    getDefaultThumbnail(pub) {
      if (pub.pictures && pub.pictures.length > 0 && pub.pictures[0].img) {
        return pub.pictures[0].img;
      } else {
        return `https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg`;
      }
    },

    // 이미지 로딩 실패 처리
    handleImageError(event) {
      event.target.src = 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg';
    },

    toggleAbstract(key) {
        this.$set(this.showAbstract, key, !this.showAbstract[key]);
      }
  },
  mounted() {
    // info.js의 portfolio에서 featured가 true인 논문만 가져옴
    const allPublications = [
      ...(info.portfolio.international || []),
      ...(info.portfolio.domestic || [])
    ];
    this.featuredPublications = allPublications.filter(pub => pub.featured === true);
  }
};
</script>
<style scoped>
  /* 논문 리스트 기본 스타일 */
  .publication-list .publication-line {
    margin-top: 14px;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }

  /* 논문 콘텐츠 레이아웃 - 썸네일과 정보를 가로로 배치 */
  .publication-content {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  /* 썸네일 영역 */
  .thumbnail {
    flex-shrink: 0;
  }

  .publication-thumbnail {
    width: 180px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    transition: transform 0.2s ease;
  }


  /* 논문 정보 영역 */
  .publication-info {
    flex: 1;
    min-width: 0; /* flexbox overflow 방지 */
  }

  .publication-info .title {
    font-size: 16px;
    padding-bottom: 0.3rem;
    font-weight: 500;
    line-height: 1.4;
    color: inherit;
  }

  .publication-info .authors {
    padding-bottom: 0.3rem;
    font-weight: 400;
    font-size: 14px;
    /* color: #6b7280; */
    line-height: 1.3;
  }

  .publication-info .journal {
    padding-bottom: 0.3rem;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    font-style: italic;
  }

    .publication-info .links {
    padding-bottom: 0.3rem;
    font-weight: 400;
    font-size: 0.85rem;
    line-height: 1.3;
  }


  .citations {
    font-style: italic;
    font-size: 0.8rem;
    color: #6b7280;
    display: inline-block;
    margin-left: 0.5rem;
  }

  /* 논문 링크 스타일 */
  .paper-box {
    display: inline-block;
    /* background-color: #f3f4f6; */
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.8rem;
    margin-right: 8px;
    text-decoration: none;
    /* color: #374151; */
    border: 0.8px solid #027BFF;
    transition: all 0.2s ease;
  }

  .paper-box:hover {
    background-color: #95c8ff;
    /* color: #FF7038; */
    text-decoration: none;
    /* transform: translateY(-1px); */
  }

  /* Abstract 버튼 스타일 */
  .abstract-btn {
    background: none;
    color: #027BFF;
    border: 0.8px solid #027BFF;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .abstract-btn:hover {
    background-color: #95c8ff;
  }

  /* Abstract 콘텐츠 스타일 */
  .abstract-content {
    margin-top: 0.8rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    /* border-left: 3px solid #027BFF; */
  }

  .bg-dark .abstract-content {
    background-color: #1a1a1a;
    border-left-color: #95c8ff;
  }

  .abstract-text {
    font-size: 0.85rem;
    line-height: 1.5;
    color: #374151;
    text-align: justify;
  }

  .bg-dark .abstract-text {
    color: #d1d5db;
  }

  /* 반응형 스타일 */
  @media (max-width: 768px) {
    .publication-content {
      flex-direction: column;
      gap: 0.75rem;
    }
/* 
    .publication-thumbnail {
      width: 100%;
      max-width: 120px;
      height: 80px;
      margin: 0 auto;
    } */

    .publication-info {
      text-align: left;
    }
  }

  @media (max-width: 480px) {
    .publication-content {
      gap: 0.5rem;
    }

    /* .publication-thumbnail {
      max-width: 100px;
      height: 70px;
    } */

    .publication-info .title {
      font-size: 14px;
    }

    .publication-info .authors,
    .publication-info .journal {
      font-size: 0.8rem;
    }
  }
  </style>
  