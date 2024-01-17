
document.addEventListener('DOMContentLoaded', function () {

    // ----------------- menu trigger ----------------
    let menuTrigger = document.querySelector(".menuTrigger");
    let gnbMenu = document.querySelector(".gnbInner");

    menuTrigger.onclick = function(){
        gnbMenu.style.transition = "all .5s"
        this.classList.toggle("active");
        gnbMenu.classList.toggle("active");
    };
    window.onresize = function(){
        gnbMenu.style.transition = "none"

        if(window.innerWidth > 768){
            gnbMenu.classList.remove("active");
        }
    }

    

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

    if (loc.includes("ommunity")) {
        community.classList.add("active");
    }
    if (loc.includes("tore")) {
        store.classList.add("active");
    }

    // --- 일정 리스트 (Schedule_List.jsp) 때문에 추가
    if(loc.includes("Sch") && loc.includes("List")) {
        community.classList.add("active");
        sche.classList.add("active");
    }

    // ---- 커뮤니티 중 일정 탭
    if (loc.includes("ommunity") && loc.includes("chedule")) {
        sche.classList.add("active");
    }
    if (loc.includes("WriteSch") || loc.includes("SchDetail")) {
        sche.classList.add("active");
    }


    // ---- 커뮤니티 중 동행 탭
    if (loc.includes("Community") && loc.includes("Gro")) {
        together.classList.add("active");
    }
    if (loc.includes("WriteGro")) {
        together.classList.add("active");
    }


    // ---------------- 모바일 메뉴 --------------------
    if(window.innerWidth < 768 ) {
        let gnbTap = document.querySelector(".gnbTab");

        gnbTap.insertAdjacentHTML('beforeend', `
            <li><a href="./message.html" class="msgTab">메세지</a></li>
            <li><a href="./Mypage_mymain.html" class="mypTab">마이페이지</a></li>
        `);
    }




    // -------------------- custom mouse ---------------------------
    const cursor = document.createElement("div");
    cursor.setAttribute("class", "cursor");
    const follower = document.createElement("div");
    follower.setAttribute("class", "cursor_follower");

    document.querySelector("body").prepend(cursor, follower);

    function myCursor(e) {
        cursor.style.top = e.pageY + 10 + "px";
        cursor.style.left = e.pageX + 10 + "px";
    }

    function Trailer(e) {
        gsap.to(follower, { duration: 0.5, left: e.pageX + 5, top: e.pageY + 5});

        store.addEventListener("mouseover", () => {
            cursor.classList.add("sHover");
            follower.classList.add("sHover_f");
        });
        store.addEventListener("mouseout", () => {
            cursor.classList.remove("sHover");
            follower.classList.remove("sHover_f");
        });
        community.addEventListener("mouseover", () => {
            cursor.classList.add("sHover");
            follower.classList.add("cHover_f");
        });
        community.addEventListener("mouseout", () => {
            cursor.classList.remove("sHover");
            follower.classList.remove("cHover_f");
        });
    }

    window.addEventListener("mousemove", myCursor);
    window.addEventListener("mousemove", Trailer);
});


