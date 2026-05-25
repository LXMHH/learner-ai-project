document.addEventListener('DOMContentLoaded', function() {
    // 1. 侧边栏当前页面高亮
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });

    // 2. 登录/注册弹窗控制
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');

    if (loginBtn) loginBtn.addEventListener('click', () => loginModal.style.display = 'flex');
    if (registerBtn) registerBtn.addEventListener('click', () => registerModal.style.display = 'flex');

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === registerModal) registerModal.style.display = 'none';
    });

    // 3. 错题本清空按钮交互
    const clearBtn = document.getElementById('clearAllBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            alert('所有错题已清空（前端模拟，后续对接后端）');
        });
    }

    // 4. 单词游戏基础交互（消消乐/接龙/PK）
    const gameBtns = document.querySelectorAll('.game-btn');
    gameBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('游戏已启动（前端模拟，后续对接后端）');
        });
    });

    // 5. 情境学习生成按钮交互
    const contextGenerateBtn = document.getElementById('contextGenerateBtn');
    if (contextGenerateBtn) {
        contextGenerateBtn.addEventListener('click', function() {
            const input = document.getElementById('contextInput').value.trim();
            const resultArea = document.getElementById('contextResult');
            if (!input) {
                alert('请输入单词或情景描述！');
                return;
            }
            resultArea.innerHTML = `
                <h4>为你生成的情景短文（含单词：${input}）</h4>
                <p style="margin-top:12px;line-height:1.8;">
                    这是一个关于<span style="color:#2b6cb0;font-weight:bold;">${input}</span>的示例短文，帮助你理解单词用法。
                </p>
            `;
        });
    }
});