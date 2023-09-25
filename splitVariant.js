<script>
    // Cookie işlemleri için yardımcı fonksiyonlar
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
            if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
        }
        return null;
    }

    // gclid değerini almak için yardımcı fonksiyon
    function getGclidValue() {
        var matches = window.location.search.match(/[?&]gclid=([^&]+)/);
        return matches ? matches[1] : null;
    }

    function splitTest() {
        var userGroup = getCookie('ab_test_group');
        if (!userGroup) {
            userGroup = Math.random() < 0.5 ? 'groupA' : 'groupB';
            setCookie('ab_test_group', userGroup, 30);
        }

        var gclid = getGclidValue();
        if (gclid) {
            var currentURL = window.location.href;
            var targetURL_A = "https://www.converse.com.tr/kadin-tum-ayakkabilar/?gclid=" + gclid + "&sorter=coksatanlar";
            var targetURL_B = "https://www.converse.com.tr/kadin-tum-ayakkabilar/?gclid=" + gclid;

            if (userGroup === 'groupA' && currentURL !== targetURL_A) {
                window.location.href = targetURL_A;
            } else if (userGroup === 'groupB' && currentURL !== targetURL_B) {
                window.location.href = targetURL_B;
            }
        }
    }

    splitTest();
</script>

