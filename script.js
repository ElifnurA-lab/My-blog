// Dil değiştirme sihirbazımız
function changeLanguage(selectedLang) {
    // Sitedeki tüm Türkçe ve İngilizce içerik bloklarını buluyoruz
    let turkishBlocks = document.querySelectorAll('.tr-block');
    let englishBlocks = document.querySelectorAll('.en-block');

    if (selectedLang === 'en') {
        // Eğer EN butonuna basıldıysa:
        turkishBlocks.forEach(block => block.style.display = 'none');   // Türkçeleri gizle
        englishBlocks.forEach(block => block.style.display = 'block');  // İngilizceleri göster
    } else {
        // Eğer TR butonuna basıldıysa (veya sayfa ilk açıldıysa):
        turkishBlocks.forEach(block => block.style.display = 'block');  // Türkçeleri göster
        englishBlocks.forEach(block => block.style.display = 'none');   // İngilizceleri gizle
    }
}

// Sayfa tarayıcıda ilk yüklendiğinde otomatik olarak Türkçe açılsın diyerek tetiğe basıyoruz
changeLanguage('tr');