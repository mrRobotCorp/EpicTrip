function openProImg() {
    var changeImg = document.querySelector(".changeImg");
    changeImg.style.display = "flex";
}

function climbox() {
    var changeImg = document.querySelector(".changeImg");
    changeImg.style.display = "none";
}

function saveAndCloseImageBox() {
    var selectedRadio = document.querySelector('input[name="changeImg"]:checked');
    if (selectedRadio) {
        var changeImg = document.querySelector(".changeImg");
        changeImg.style.display = "none";
    } else {
        alert("이미지를 선택해주세요.");
    }
}

function openchpwdmodal() {
    var modalWrap = document.querySelector(".modalWrap");
    modalWrap.style.display = "flex";
}


function colsechpwd() {
    var modalWrap = document.querySelector(".modalWrap");
    modalWrap.style.display = "none";
}
function okchanpwd() {
    var currentPwdInput = document.getElementById("pwd");
    var errNopwd = document.getElementById("errNopwd");

    if (currentPwdInput.value.trim() === "") {
        errNopwd.style.display = "flex";
        return; // 입력이 없으면 아무 작업도 하지 않고 종료
    }
    closechpwd();
}


function openchpnummodal() {
    var phoneWrap = document.querySelector(".phoneWrap");
    phoneWrap.style.display = "flex";
}


function changePhoneNumber() {
    var phoneInput = document.getElementById("idPnum");
    var codeInput = document.getElementById("idCode");
    var phoneErr = document.getElementById("phoneErr");
    var modalWrap = document.querySelector(".phoneWrap");

    if (phoneInput.value.trim() === "" || codeInput.value.trim() === "") {
        phoneErr.style.display = "flex";
        return;
    }

    // 인증번호 확인 로직 수행
    // ...

    // 변경 완료 후 모달 닫기
    modalWrap.style.display = "none";
}

function closePhoneModal() {
    var phoneWrap = document.querySelector(".phoneWrap");
    phoneWrap.style.display = "none";
}

function msgCk() {
    var phoneInput = document.getElementById("idPnum");
    var nonepnum = document.getElementById("nonepnum");

    if (phoneInput.value.trim() === "") {
        nonepnum.textContent = "휴대전화 번호를 입력해주세요.";
        return;
    }

    // 인증 발송 로직 수행
    // ...

    // 인증 발송 텍스트 변경
    var sendButton = phoneInput.nextElementSibling;
    sendButton.textContent = "재발송";

    // 기존 경고 텍스트 초기화
    nonepnum.textContent = "";
}

function openquitmodal() {
    var quitWrap = document.querySelector(".quitWrap");
    quitWrap.style.display = "flex";
}
function closequitModal() {
    var quitWrap = document.querySelector(".quitWrap");
    quitWrap.style.display = "none";
}


// ==============================
// URL에서 현재 페이지의 파일명을 추출하는 함수
function getCurrentPageFileName() {
    const urlParts = window.location.href.split('/');
    return urlParts[urlParts.length - 1];
}

const currentPageFileName = getCurrentPageFileName();

if (currentPageFileName === 'Mypage_mysetting.html') {
    mysetting.classList.add('myselect');
}
if (currentPageFileName === 'Mypage_mybill.html') {
    mybill.classList.add('myselect');
}
if (currentPageFileName === 'Mypage_myreview.html') {
    myreview.classList.add('myselect');
}
if (currentPageFileName === 'Mypage_mygroup.html') {
    mygroup.classList.add('myselect');
}
if (currentPageFileName === 'Mypage_mycal.html') {
    mycal.classList.add('myselect');
}
if (currentPageFileName === 'Mypage_mywish.html') {
    mywish.classList.add('myselect');
}

const mmName = document.querySelector(".mproname");

if (currentPageFileName === 'Mypage_mymain.html') {
    mmName.classList.add('mainsel');
}

// 자기소개 수정
function chIntorduce() {
    var textarea = document.getElementById("introTextarea");
    var button = document.querySelector(".cmmtBtn");

    if (textarea.readOnly) {
        textarea.readOnly = false;
        button.textContent = "저장";
        button.style.backgroundColor = "rgba(145, 205, 255, 0.772)";
    } else {
        var savedContent = textarea.value;
        textarea.readOnly = true;
        button.textContent = "수정";
        button.style.backgroundColor = "#ffd027a3";
        console.log("Saved content:", savedContent);
    }
}






