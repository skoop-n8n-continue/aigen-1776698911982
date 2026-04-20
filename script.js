document.addEventListener('DOMContentLoaded', () => {
    // Clock function
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        document.getElementById('time').textContent = `${hours}:${minutes}`;

        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
    }

    // Weather Mock
    function updateWeather() {
        const temps = ['68°F', '72°F', '75°F', '70°F'];
        const desc = ['Sunny', 'Partly Cloudy', 'Clear Sky', 'Breezy'];
        const randomIdx = Math.floor(Math.random() * temps.length);

        document.getElementById('weather-temp').textContent = temps[randomIdx];
        document.getElementById('weather-desc').textContent = desc[randomIdx];
    }

    // News Ticker
    const newsItems = [
        "Quarterly goals exceeded by 15% - Great job team!",
        "New coffee machine installed in the breakroom on 4th floor.",
        "Upcoming company retreat scheduled for next month. Check your email for details.",
        "Our latest product launch reached 1 million active users today.",
        "Join us for the 'Lunch & Learn' session this Friday at noon.",
        "Welcome our newest team members joining us this week from Seattle.",
        "Reminder: All hands meeting at 2:00 PM in the main conference hall."
    ];

    function loadNews() {
        const ticker = document.getElementById('news-ticker');
        ticker.innerHTML = '';
        newsItems.forEach(item => {
            const span = document.createElement('span');
            span.className = 'ticker-item';
            span.textContent = item;
            ticker.appendChild(span);
        });

        // Clone for seamless loop if needed by some ticker implementations
        // but our CSS animation works on the whole container
    }

    // Welcome Message Rotation (Optional for dynamic feel)
    const welcomeMsgs = [
        { main: "Welcome to Our Office", sub: "Innovation starts here." },
        { main: "Building the Future", sub: "Together we achieve more." },
        { main: "Excellence in Motion", sub: "Dedicated to your success." }
    ];
    let welcomeIdx = 0;

    function rotateWelcome() {
        welcomeIdx = (welcomeIdx + 1) % welcomeMsgs.length;
        const msg = welcomeMsgs[welcomeIdx];
        const container = document.querySelector('.welcome-container');

        container.style.opacity = '0';
        setTimeout(() => {
            document.getElementById('welcome-msg').textContent = msg.main;
            document.getElementById('sub-msg').textContent = msg.sub;
            container.style.opacity = '1';
        }, 1000);
    }

    // Initial calls
    updateClock();
    updateWeather();
    loadNews();

    // Intervals
    setInterval(updateClock, 1000); // Every second
    setInterval(updateWeather, 600000); // Every 10 mins
    setInterval(rotateWelcome, 15000); // Every 15 seconds
});
