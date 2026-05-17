document.addEventListener("DOMContentLoaded", function() {

    // 1. ARRAY & LOOP: Programmatically generating the list
    const mySkills = [
        "CSS NC II Certified",
        "System Assembly",
        "Hardware Disassembly",
        "Cable Cabling",
        "Web Manipulation"
    ];

    const list = document.getElementById('skills-list');
    mySkills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        list.appendChild(li);
    });

    // 2. THEME MANIPULATION: Changes the whole body class
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Conditional Logic to change button text
        if (document.body.classList.contains('dark-theme')) {
            themeBtn.textContent = "Switch to Light Mode";
        } else {
            themeBtn.textContent = "Switch to Dark Mode";
        }
    });

    // 3. ELEMENT MODIFICATION: Interactive Status
    const actionBtn = document.getElementById('action-btn');
    const statusText = document.getElementById('status');

    actionBtn.addEventListener('click', () => {
        // Manipulating the content and style via JS
        if (statusText.textContent === "Idle") {
            statusText.textContent = "Active & Running";
            statusText.classList.add('active-status');
            actionBtn.textContent = "Shut Down";
        } else {
            statusText.textContent = "Idle";
            statusText.classList.remove('active-status');
            actionBtn.textContent = "Initialize System";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MISSION TOGGLE LOGIC ---
    const missionBtn = document.getElementById('mission-btn');
    const missionText = document.getElementById('mission-text');

    if (missionBtn && missionText) {
        missionBtn.addEventListener('click', function() {
            // Toggle the visibility class
            missionText.classList.toggle('show-content');

            // Change button text based on state (Requirement 03: Logic)
            if (missionText.classList.contains('show-content')) {
                missionBtn.textContent = "Hide Mission";
                console.log("Mission displayed.");
            } else {
                missionBtn.textContent = "Show My Mission";
                console.log("Mission hidden.");
            }
        });
    }

    // --- 2. THEME SWITCHER LOGIC ---
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeBtn.textContent = document.body.classList.contains('dark-theme') ? "Light Mode" : "Dark Mode";
        });
    }

    // --- 3. SKILLS ARRAY LOOP (Requirement 04) ---
    const mySkills = [
        "CSS NC II Certified",
        "System Assembly & Disassembly",
        "Network Cable Cabling",
        "HTML5 & CSS3 Development",
        "Wi-Fi Config",
        "Graphic Design",
        "2D Animation"
    ];

    const skillContainer = document.getElementById('skills-list');
    if (skillContainer) {
        mySkills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillContainer.appendChild(li);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    
    // THEME SWITCHER LOGIC
    const themeBtn = document.getElementById('theme-btn');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Toggle the class on the body tag
            document.body.classList.toggle('dark-theme');

            // Logic to change the button text dynamically (Requirement 03)
            if (document.body.classList.contains('dark-theme')) {
                themeBtn.textContent = "Switch to Light Mode";
                console.log("Theme: Dark");
            } else {
                themeBtn.textContent = "Switch to Dark Mode";
                console.log("Theme: Light");
            }
        });
    }

    // MISSION TOGGLE LOGIC
    const missionBtn = document.getElementById('mission-btn');
    const missionText = document.getElementById('mission-text');

    if (missionBtn && missionText) {
        missionBtn.addEventListener('click', () => {
            missionText.classList.toggle('show-content');
            missionBtn.textContent = missionText.classList.contains('show-content') ? "Hide Mission" : "Show My Mission";
        });
    }
});