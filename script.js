const screens = document.querySelectorAll('.screen');
let current = 0;
let typingInterval = null;
let musicPlaying = false;

function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 5 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animation = `particleFloat ${Math.random() * 10 + 15}s infinite`;
    particle.style.animationDelay = Math.random() * 10 + 's';
    particlesContainer.appendChild(particle);
  }
}

function nextScreen() {
  if (current < screens.length - 1) {
    screens[current].style.opacity = '0';
    screens[current].style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      screens[current].classList.remove('active');
      current++;
      
      screens[current].classList.add('active');
      screens[current].style.opacity = '0';
      screens[current].style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        screens[current].style.opacity = '1';
        screens[current].style.transform = 'scale(1)';
      }, 50);
      
      if (current === 1) {
        animateSorry();
      } else if (current === 2) {
        letterOpened = false;
        const heartLetter = document.getElementById('heartLetter');
        const letterBox = document.getElementById('letterBox');
        const continueBtn = document.getElementById('continueBtn');
        if (heartLetter) {
          heartLetter.classList.remove('opened');
          heartLetter.classList.add('closed');
        }
        if (letterBox) {
          letterBox.classList.remove('opened');
        }
        if (continueBtn) {
          continueBtn.style.display = 'none';
        }
      } else if (current === 3) {
        animateGallery();
      } else if (current === 4) {
        animatePromises();
      } else if (current === 5) {
        animateFinalScreen();
      }
    }, 400);
  }
}

const text = `Dear Appi,

I am sorry for hurting you.
Not once, but again and again.

The worst part is —
I apologised and still repeated the same pattern.

That makes my apologies feel empty,
and I understand why you stopped believing them.

I am not writing this to ask for forgiveness.
I am writing this because I finally see my mistakes clearly.

I want to change, Appi.
And I will, because you matter more than my ego.`;

let index = 0;
let letterOpened = false;

function openLetter() {
  if (letterOpened) return;
  
  const heartLetter = document.getElementById('heartLetter');
  const letterBox = document.getElementById('letterBox');
  const continueBtn = document.getElementById('continueBtn');
  
  if (heartLetter && letterBox) {
    heartLetter.classList.remove('closed');
    heartLetter.classList.add('opened');
    letterBox.classList.add('opened');
    letterOpened = true;
    
    setTimeout(() => {
      startTyping();
    }, 300);
    
    setTimeout(() => {
      if (continueBtn) {
        continueBtn.style.display = 'block';
        continueBtn.style.animation = 'fadeIn 0.5s ease forwards';
      }
    }, 5000);
  }
}

function startTyping() {
  const target = document.getElementById("typedText");
  if (!target) return;
  
  target.innerHTML = "";
  index = 0;
  
  if (typingInterval) {
    clearInterval(typingInterval);
  }
  
  typingInterval = setInterval(() => {
    if (index < text.length) {
      if (text[index] === '\n') {
        target.innerHTML += '';
      } else {
        target.innerHTML += text[index];
      }
      index++;
    } else {
      clearInterval(typingInterval);
      target.innerHTML += '<span class="cursor">|</span>';
    }
  }, 40);
}

function animateGallery() {
  const photoFrames = document.querySelectorAll('.photo-frame');
  photoFrames.forEach((frame, index) => {
    setTimeout(() => {
      frame.style.opacity = '0';
      frame.style.transform = 'translateY(30px) scale(0.9)';
      frame.style.transition = 'all 0.6s ease';
      
      setTimeout(() => {
        frame.style.opacity = '1';
        frame.style.transform = 'translateY(0) scale(1)';
      }, 100);
    }, index * 50);
  });
  
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(50px) scale(0.8)';
      item.style.transition = 'all 0.6s ease';
      
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0) scale(1)';
      }, 100);
    }, index * 200);
  });
}

function animatePromises() {
  const promises = document.querySelectorAll('.promise-item');
  promises.forEach((promise, index) => {
    promise.style.opacity = '0';
    promise.style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
      promise.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      promise.style.opacity = '1';
      promise.style.transform = 'translateX(0)';
    }, index * 300);
  });
}

function animateSorry() {
  const sorryText = document.getElementById('sorryText');
  if (sorryText) {
    sorryText.style.animation = 'none';
    setTimeout(() => {
      sorryText.style.animation = 'sorryEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
    }, 10);
  }
  
  const tears = document.querySelectorAll('.tear');
  tears.forEach((tear, index) => {
    tear.style.animation = 'none';
    setTimeout(() => {
      tear.style.animation = `tearFall 2s ease-in-out infinite`;
      tear.style.animationDelay = `${index * 0.3}s`;
    }, 10);
  });
}

function animateFinalScreen() {
  const finalMessage = document.querySelector('.final-message');
  if (finalMessage) {
    finalMessage.style.opacity = '0';
    setTimeout(() => {
      finalMessage.style.transition = 'opacity 1s ease';
      finalMessage.style.opacity = '1';
    }, 300);
  }
  
  createFloatingHearts();
}

function createFloatingHearts() {
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💞', '💓'];
  const heartsContainer = document.querySelector('.floating-hearts');
  
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
      heart.style.animation = `floatHeart ${Math.random() * 5 + 6}s infinite ease-in-out`;
      heart.style.animationDelay = Math.random() * 2 + 's';
      heartsContainer.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 10000);
    }, i * 500);
  }
}

const style = document.createElement('style');
style.textContent = `
  .cursor {
    display: inline-block;
    animation: blink 1s infinite;
    color: rgba(255, 255, 255, 0.8);
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  @keyframes particleFloat {
    0% {
      transform: translateY(100vh) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'Enter') {
    if (current < screens.length - 1) {
      nextScreen();
    }
  } else if (e.key === 'ArrowLeft') {
    if (current > 0) {
      screens[current].classList.remove('active');
      current--;
      screens[current].classList.add('active');
    }
  }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50 && current < screens.length - 1) {
    nextScreen();
  }
  if (touchEndX > touchStartX + 50 && current > 0) {
    screens[current].classList.remove('active');
    current--;
    screens[current].classList.add('active');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initMusic();
  
  const firstScreen = screens[0];
  if (firstScreen) {
    firstScreen.style.opacity = '1';
    firstScreen.style.transform = 'scale(1)';
  }
  
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.body.style.backgroundPosition = `${x * 50}% ${y * 50}%`;
  });
});

function smoothScroll(element) {
  element.scrollTo({
    top: element.scrollHeight,
    behavior: 'smooth'
  });
}

function initMusic() {
  const music = document.getElementById('backgroundMusic');
  
  if (!music) return;
  
  music.volume = 0.5;
  
  const playMusic = () => {
    music.play().then(() => {
      musicPlaying = true;
    }).catch((error) => {
      musicPlaying = false;
    });
  };
  
  playMusic();
  
  document.addEventListener('click', playMusic, { once: true });
  document.addEventListener('touchstart', playMusic, { once: true });
  document.addEventListener('keydown', playMusic, { once: true });
  
  music.addEventListener('ended', () => {
    music.currentTime = 0;
    music.play();
  });
  
  music.addEventListener('error', (e) => {
    console.error('Error loading music:', e);
  });
}
