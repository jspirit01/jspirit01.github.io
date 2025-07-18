import time
import json
from scholarly import scholarly

# JSON 파일 경로 (public 폴더 안에 저장한 경우)
FILE_PATH = 'public/publications.json'

# JSON 파일 읽기
with open(FILE_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

# data["publications"]는 두 개의 객체를 가진 배열입니다.
# 첫 번째 객체: {"international": [...]} / 두 번째 객체: {"domestics": [...]}
for category in data.get("publications", []):
    for key, pub_list in category.items():
        if key == "international":
            for pub in pub_list:
                title = pub.get('title', '')
                print(f"검색 중: {title}")
                try:
                    search_query = scholarly.search_pubs(title)
                    found = False
                    for result in search_query:
                        found_title = result.get('bib', {}).get('title', '')
                        if found_title.strip().lower() == title.strip().lower():
                            citations = result.get('num_citations', 0)
                            print(f"'{title}' 정확히 일치하는 논문 인용 수: {citations}")
                            pub['citations'] = citations
                            found = True
                            break
                    if not found:
                        print(f"정확히 일치하는 결과 없음: {title}")
                        pub['citations'] = 0
                except Exception as e:
                    print(f"오류 발생: {title}, {e}")
                    pub['citations'] = 0

                time.sleep(10)
        else:
            # "domestics" 카테고리의 경우 검색하지 않고 그대로 둡니다.
            print("Domestic category detected; citation update skipped for these entries.")

# 업데이트된 데이터를 JSON 파일에 덮어쓰기
with open(FILE_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
