<script>
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

var abTestVariant = getCookie('ab_test_group');

if (abTestVariant === 'groupA') {
        dataLayer.push({
            'event': 'split_test',
            'type': 'A/B Test',
            'variant': abTestVariant
        });
} else if (abTestVariant === 'groupB') {
        dataLayer.push({
            'event': 'split_test',
            'type': 'A/B Test',
            'variant': abTestVariant
        });
} else {
}
</script>