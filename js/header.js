document.addEventListener('DOMContentLoaded', function () {

    // --------------- 유저 프로필 리스트 ------------------
    const userList = document.querySelector(".userList");
    const userImg = document.querySelector(".userImg");

    if (userList != null && userImg != null) {
        userImg.addEventListener('mouseover', function () {
            userList.style.display = 'block';
        });
        userList.addEventListener('mouseover', function () {
            userList.style.display = 'block';
        });

        document.addEventListener('mouseup', function (e) {
            if (!userList.contains(e.target)) {
                userList.style.display = 'none';
            }
        });
    }

    // ------------- 주소 별 gnb 활성화 -----------
    const loc = window.location.href;
    const store = document.querySelector(".store");
    const community = document.querySelector(".community");
    const together = document.querySelector(".together");
    const sche = document.querySelector(".sche");

    if (loc.includes("Community")) {
        community.classList.add("active");
    }
    if (loc.includes("store")) {
        store.classList.add("active");
    }

    // ---- 커뮤니티 중 일정 탭
    if (loc.includes("Community") && loc.includes("Schedule")) {
        sche.classList.add("active");
    }
    if (loc.includes("Community") && loc.includes("SchDetail")) {
        sche.classList.add("active");
    }
    if (loc.includes("Community") && loc.includes("Write")) {
        sche.classList.add("active");
    }


    // ---- 커뮤니티 중 동행 탭
    if (loc.includes("Community") && loc.includes("Group")) {
        together.classList.add("active");
    }
    if (loc.includes("Community") && loc.includes("Posting")) {
        together.classList.add("active");
    }



})