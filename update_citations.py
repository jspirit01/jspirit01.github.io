import time
import json
from scholarly import scholarly

# JSON 파일 경로 (public 폴더 안에 저장한 경우)
FILE_PATH = 'public/publications.json'

# JSON 파일 읽기
with open(FILE_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

# data["publications"]는 두 개의 객체를 가진 배열입니다.
# 첫 번째 객체: {"international": [...]}
# 두 번째 객체: {"domestics": [...]}
for category in data.get("publications", []):
    # category는 {"international": [...]} 또는 {"domestics": [...]}
    for key, pub_list in category.items():
        for pub in pub_list:
            title = pub.get('title', '')
            print(f"검색 중: {title}")
            try:
                # 논문 제목으로 검색
                search_query = scholarly.search_pubs(title)
                result = next(search_query)
                citations = result.get('num_citations', 0)
                print(f"'{title}' 인용 수: {citations}")
                pub['citations'] = citations
            except StopIteration:
                print(f"검색 결과 없음: {title}")
                pub['citations'] = 0
            except Exception as e:
                print(f"오류 발생: {title}, {e}")
                pub['citations'] = 0

            # Google Scholar 차단을 방지하기 위해 요청 사이에 대기 (필요시 시간 조절)
            time.sleep(10)

# 업데이트된 데이터를 JSON 파일에 덮어쓰기
with open(FILE_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
