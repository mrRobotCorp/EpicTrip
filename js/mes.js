// JavaScript 코드 예시
const memChatButton = document.getElementById('memChat');
const adminChatButton = document.getElementById('adminChat');

// URL에서 현재 페이지의 파일명을 추출하는 함수
function getCurrentPageFileName() {
  const urlParts = window.location.href.split('/');
  return urlParts[urlParts.length - 1];
}

const currentPageFileName = getCurrentPageFileName();

if (currentPageFileName === 'message.html') {
  memChatButton.classList.add('selected');
}

if (currentPageFileName === 'message_userAdChat.html') {
  adminChatButton.classList.add('selected');
}

const messageTextarea = document.getElementById('messageTextarea');
const sendButton = document.getElementById('sendButton');

messageTextarea.addEventListener('input', function() {
    if (messageTextarea.value.trim() !== '') {
        sendButton.classList.add('send');
    } else {
        sendButton.classList.remove('send');
    }
});

document.addEventListener("DOMContentLoaded", function() {
  var roomTitles = document.querySelectorAll(".roomtitle p");

  roomTitles.forEach(function(roomTitle) {
      if (roomTitle.textContent.length > 18) {
          var originalText = roomTitle.textContent;
          roomTitle.textContent = originalText.slice(0, 18) + "···";
      }
  });
});

// 말 줄임...
document.addEventListener("DOMContentLoaded", function() {
  var chatroomName = document.querySelectorAll(".chatroomname p");

  chatroomName.forEach(function(chatroomName) {
      if (chatroomName.textContent.length > 50) {
          var originalText = chatroomName.textContent;
          chatroomName.textContent = originalText.slice(0, 50) + "···";
      }
  });
});

// 동행 확정, 취소 토글 버튼
const groupToggleButtons = document.querySelectorAll('.groupToggle');
const grouponTexts = document.querySelectorAll('.groupon');

groupToggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('cancel')) {
      button.textContent = '확정';
      button.classList.remove('cancel');
      grouponTexts[index].innerText = '';
    } else {
      button.textContent = '취소';
      button.classList.add('cancel');
      grouponTexts[index].innerText = '동행 확정';
    }
  });
});

// 동행 확정 모달 열기, 닫기
function openSelm(){
  var selmModal = document.querySelector(".selmModal");
  selmModal.style.display = "block";
}

function closeSelm(){
  var selmModal = document.querySelector(".selmModal");
  selmModal.style.display = "none";
}

// =============== 모달 js ==================
// ms모달 열기,닫기
function memMpclose(){
  var memMpModal = document.querySelector(".memMpModal");
  memMpModal.style.display = "none";
}
function memMpopen(){
  var memMpModal = document.querySelector(".memMpModal");
  memMpModal.style.display = "flex";
}
// 
// .goodMem 버튼 클릭 시 토글 동작
function recogood() {
  var goodButton = document.querySelector('.goodMem');
  goodButton.classList.toggle('choice');
}

// .badMem 버튼 클릭 시 토글 동작
function recobad() {
  var badButton = document.querySelector('.badMem');
  badButton.classList.toggle('choiceB');
}

