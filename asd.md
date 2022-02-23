- 경일아카데미
  솔리디티, nodejs로 개발.
  front: react 사용

아티스트(셀러)가 플랫폼에 음원을 등록하고 플랫폼에 등록에 대한 일정 수수료 지불
-> 플랫폼에서는 해당 음원을 ipfs에 업로드하며, 메타데이터에는 음원 주소 및 기타 곡정보를 입력한 뒤 ipfs에 업로드
-> 이 업로드 된 데이터를 바탕으로 테스트넷에 nft를 민팅함

방법\*: 이용자가(바이어) 일정 금액을 지불하고(월정액) 무제한으로 청취 -> 월정액으로
이용자가 곡당 일정 금액을 지불하여 제한적으로 청취

이용자가 곡을 들을 때마다 아티스트에게 일정 로열티 지급(\*기준: 재생 횟수 or 총 재생 시간, 지급방식: 퍼센트 또는 액수)
이용자는 like 기능을 이용할 수 있으며,
like를 많이 받은 곡들이 상단에 노출될 수 있음
또한 재생 횟수도 표기됨

고려사항(\*):
권고사항일 뿐인 eip2981을 참조 여부? -> 하는게 맞음
셀러의 음원 등록 시 가격 책정? -> 반영된다면 경매와 비슷한 시스템으로 운영되지 않을까 추측

\*회원가입(아티스트/청자)

- 아티스트: 메타마스크 통한 조인, 가수명, 장르, 등 -> 기타 정보 필요?(언어)
- 청자: 메타마스크 통한 조인, 취향 장르 선택 가능?

* 곡 등록

- 가수명 가져오기, 곡 제목, 곡 정보, 국가, 가사, 발매년도(선택?), 곡 업로드
- 곡은 ipfs에 업로드 됨
  ㅇ 참조: https://docs.ipfs.io/install/command-line/#official-distributions
- RPC통신을 이용하여 파일을 업로드? -> 방법을 좀 더 생각 -> input file로 해야할듯? -> 테스트 필요
- ipfs에 음원을 올린 뒤 주소를 받아옴. 그 주소를 기타 곡 정보와 함께 메타데이터에 박아넣고 ipfs에 재업로드
  ㅇ 지금 고려해야 할 점: EIP2981을 읽어보고 그에 따른 로열티 퍼센티지를 메타데이터에 입력(근데 전부 일정하면 굳이 메타데이터에 입력할 필요가 있을지)
  ㅇ 추후 고려해야 할 점: 메타데이터 링크를 숨기는 방법은 실제 서비스 준비 시 구현해야 함, 보안문제 때문

☆ 로열티를 처음에 1회만 받고 말 것인지, 나중에 잘 되면 조회수에 비례하여 플랫폼에서 가져갈 것인지

- 사용자가 곡을 어떤 기준으로 검색하게 할 것인가? 또는 어떤 식으로 사용자에게 보여지게 할 것인가?

* 좋아요 수, 조회수 기능 추가(총 재생시간으로 sort 기능을 넣을 수도)

- 청취

* 어쨌든 사용자가 어떤 곡을 클릭하면 ipfs에 등록된 메타데이터를 읽어온 뒤 음악도 메타데이터 안의 음원 주소로 재생
* 이 때 사용자와 아티스트 각각에게 재생 횟수와 재생 시간을 증가시켜줌 -> 나중에 리워드 로직에 포함
  ㅇ 재생 횟수와 시간에 비례하도록 하는 것은 솔리디티 로직인가? 어떤 식으로 짜야 하는가. 학생들이 해야 하는가