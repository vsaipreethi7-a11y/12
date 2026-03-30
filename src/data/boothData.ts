export interface Booth {
  slNo: number;
  boothNo: number;
  boothName: string;
  village: string;
  areas: string;
  lat: number;
  lng: number;
}

export interface Village {
  name: string;
  boothCount: number;
  lat: number;
  lng: number;
  booths: number[];
}

export interface RouteDay {
  day: number;
  stops: { order: number; village: string; distance: number; lat: number; lng: number }[];
}

export const booths: Booth[] = [
  { slNo: 1, boothNo: 18, boothName: "விக்டோரியா ஆரம்பப்பள்ளி, புதிய கட்டிடம் தெற்கு பாகம், வடக்கு பகுதி, தென்மலை", village: "திருவேட்டநல்லூர்", areas: "வார்டு எண்.8 மாரியம்மன் கோவில் தெரு; வார்டு எண்.7 தெ.பெ.தெரு; சேனையர் தெரு; தலையாரி தெரு; பிச்சாண்டி தெரு", lat: 9.235, lng: 77.395 },
  { slNo: 2, boothNo: 19, boothName: "விக்டோரியா ஆரம்பப்பள்ளி, புதியகட்டிடம், தெற்கு பாகம், தெற்குபகுதி, தென்மலை", village: "திருவேட்டநல்லூர்", areas: "வார்டு எண்.1 தங்கவேல் தெரு; நாதத் தேவர் தெரு; மஞ்சன தெரு; காலணி தென்வடல் மேலத் தெரு", lat: 9.235, lng: 77.395 },
  { slNo: 3, boothNo: 20, boothName: "ஊராட்சி ஒன்றிய தொடக்கப்பள்ளி, புதுக் கட்டிடம், கிழக்கு பகுதி, ஏ.சுப்பிரமணியாபுரம்", village: "திருவேட்டநல்லூர்", areas: "வார்டு எண்.3-1 முதல் 5-வது தெரு", lat: 9.235, lng: 77.395 },
  { slNo: 4, boothNo: 21, boothName: "அரசு நடுநிலைப்பள்ளி, கிழக்குகட்டிடம், மையப்பகுதி, அருகன்குளம்", village: "திருவேட்டநல்லூர்", areas: "வார்டு எண்.4-1 முதல் 5-வது தெரு", lat: 9.235, lng: 77.395 },
  { slNo: 5, boothNo: 59, boothName: "அங்கன்வாடி மையம், தெற்கு பகுதி, தெற்குச்சத்திரம், மஜரா, இராயகிரி", village: "திருவேட்டநல்லூர்", areas: "தெற்குச்சத்திரம்; வடக்குத் தெரு; தெற்குத் தெரு", lat: 9.235, lng: 77.395 },
  { slNo: 6, boothNo: 60, boothName: "உயர்குடி கணேசர் ஆரம்பப்பள்ளி, கிழக்கு கட்டிடம், வடுகபட்டி, மஜரா, இராயகிரி", village: "திருவேட்டநல்லூர்", areas: "முத்துராமலிங்கம் தெரு; பள்ளிக்கூடத் தெரு; அம்பேத்கார் தெரு; கலைஞர் தெரு; போஸ் தெரு", lat: 9.235, lng: 77.395 },
  { slNo: 7, boothNo: 61, boothName: "புனித அந்தோணியார் ஆரம்பப்பள்ளி, மேலக்கரிசல்குளம்", village: "திருவேட்டநல்லூர்", areas: "முப்புடாதியம்மன் கோவில் தெரு; இந்திரா நகர்; பூதத்தார் கோவில் தெரு", lat: 9.235, lng: 77.395 },
  { slNo: 8, boothNo: 62, boothName: "பெரியதாய் மன்னாடிதேவர் ஆரம்பப்பள்ளி, தளவாய்புரம்", village: "திருவேட்டநல்லூர்", areas: "மெயின் ரோடு; பிள்ளையார் கோவில் தெரு; வேதக்கோவில் தெரு", lat: 9.235, lng: 77.395 },
  { slNo: 9, boothNo: 93, boothName: "மாவீரன் புலித்தேவன் அரசு மேல்நிலைப்பள்ளி, வடக்குகட்டிடம், நெல்கட்டும்செவல்", village: "திருவேட்டநல்லூர்", areas: "கீழத் தெரு; உள்ளமுடையார் கோவில் தெரு; மேலத் தெரு; குருநாதன் கோவில் தெரு", lat: 9.235, lng: 77.395 },
  { slNo: 10, boothNo: 84, boothName: "அப்பாவு ஆரம்பபள்ளி, தெற்கு கட்டிடம், மேற்கு பகுதி, திருமலாபுரம்", village: "பாம்பு கோவில்", areas: "வண்டி பாதை; 2-வது முதல் 4-வது தெரு", lat: 9.24, lng: 77.39 },
  { slNo: 11, boothNo: 85, boothName: "அரசு உதவி பெறும் ஆரம்பபள்ளி, புதிய கட்டிடம், ஆத்துவழி, கோட்டையூர்", village: "பாம்பு கோவில்", areas: "வேதக் கோவில் தெரு; பள்ளிக்கூடத் தெரு; பிள்ளையார் கோவில் தெரு; பள்ளிவாசல் தெரு", lat: 9.24, lng: 77.39 },
  { slNo: 12, boothNo: 86, boothName: "அரசு உதவி பெறும் ஆரம்பபள்ளி, கிழக்கு பகுதி, ஆத்துவழி, கோட்டையூர்", village: "பாம்பு கோவில்", areas: "பள்ளிக்கூடத் தெரு; பிள்ளையார் கோவில் தெரு (மேற்கு); வேதக் கோவில் தெரு", lat: 9.24, lng: 77.39 },
  { slNo: 13, boothNo: 91, boothName: "சகாயம் ஆரம்பபள்ளி, சங்கனாப்பேரி", village: "பாம்பு கோவில்", areas: "வடக்குத் தெரு; அருந்ததியர் தெரு; பிள்ளையார் கோவில் தெரு; தபால் நிலை எதிர் தெரு", lat: 9.24, lng: 77.39 },
  { slNo: 14, boothNo: 94, boothName: "மாவீரன் புலித்தேவன் அரசு மேல்நிலைப்பள்ளி, மேற்குகட்டிடம், நெல்கட்டும்செவல்", village: "பாம்பு கோவில்", areas: "மேலத் தெரு; வடக்குத் தெரு; காளியம்மன் கோவில் தெரு; பள்ளிக்கூடத் தெரு", lat: 9.24, lng: 77.39 },
  { slNo: 15, boothNo: 96, boothName: "குழந்தைவேல் ஆரம்பப்பள்ளி, பாறைப்பட்டி, நெல்கட்டும்செவல்", village: "பாம்பு கோவில்", areas: "பாறைப்பட்டி; தெற்குத் தெரு; விநாயகர் கோவில் தெரு; நடுத் தெரு; வடக்குத் தெரு", lat: 9.24, lng: 77.39 },
  { slNo: 16, boothNo: 99, boothName: "அரசு ஆரம்பபள்ளி, தெற்கு கட்டிடம், அரியூர்", village: "பாம்பு கோவில்", areas: "வடக்குத் தெரு; மேலத் தெரு; விநாயகர் கோவில் தெரு; நடுத் தெரு", lat: 9.24, lng: 77.39 },
  { slNo: 17, boothNo: 208, boothName: "பாண்டியக்கோனார் ஆரம்பப்பள்ளி, மேற்கு கட்டிடம், முள்ளிகுளம்", village: "பாம்பு கோவில்", areas: "பஜனைகோவில் கிழக்கு தெரு; புலவர் தெரு; மாடசாமி கோவில் தெரு; மாதாகோவில் தெரு", lat: 9.24, lng: 77.39 },
  { slNo: 18, boothNo: 209, boothName: "பாண்டியக்கோனார் ஆரம்பப்பள்ளி, கிழக்கு கட்டிடம், முள்ளிகுளம்", village: "பாம்பு கோவில்", areas: "மேலத்தெரு; இந்திரா காலனி; குமாரசாமி பவனம்; நடுத் தெரு; முத்தாலம்மன் கோவில் தெரு", lat: 9.24, lng: 77.39 },
  { slNo: 19, boothNo: 95, boothName: "ஏ.எம்.சி.ஆரம்பபள்ளி, பச்சேரி, மஜரா, நெல்கட்டும்செவல்", village: "தெற்கு புதூர்", areas: "பச்சேரி; பள்ளிக்கூடத் தெரு; மடத்து தெரு; சர்ச் தெரு; காலணி தெரு", lat: 9.2, lng: 77.43 },
  { slNo: 20, boothNo: 98, boothName: "பாண்டியன் ஆரம்பபள்ளி, மேற்கு கட்டிடம், கீழப்புதூர்", village: "தெற்கு புதூர்", areas: "மெயின் தெரு; அரசமரத்து தெரு; நடுத் தெரு; ரேசன் கடை தெரு; வடக்குத் தெரு", lat: 9.2, lng: 77.43 },
  { slNo: 21, boothNo: 207, boothName: "கமிட்டி ஆரம்பபள்ளி, ஈச்சம்பொட்டல்புதூர், மஜரா, நகரம்", village: "தெற்கு புதூர்", areas: "ஆதிதிராவிடர் காலணி; கருப்பசாமி கோவில்; வேதக்கோவில் 1-வது தெரு; பள்ளிக்கூடத் தெரு", lat: 9.2, lng: 77.43 },
  { slNo: 22, boothNo: 97, boothName: "பஞ்சாயத்து யூனியன் ஆரம்பபள்ளி, இராமச்சந்திராபுரம், நெல்கட்டும்செவல்", village: "அருணாசலபுரம்", areas: "அம்மன்குளம் பள்ளிக்கூடத் தெரு; நடுத் தெரு; காலணி தெரு; வடக்குத் தெரு; தெற்குத் தெரு", lat: 9.215, lng: 77.415 },
  { slNo: 23, boothNo: 204, boothName: "பஞ்சாயத்து யூனியன் ஜவஹர் நடுநிலைப்பள்ளி, புதிய கட்டிடம், தெற்கு பகுதி, நகரம்", village: "அருணாசலபுரம்", areas: "நகரம் மெயின்ரோடு; வடக்குத் தெரு; மாரியம்மன் கோவில் மெயின் தெரு", lat: 9.215, lng: 77.415 },
  { slNo: 24, boothNo: 205, boothName: "பஞ்சாயத்து யூனியன் ஜவஹர் நடுநிலைப்பள்ளி, புதிய கட்டிடம், வடக்கு பகுதி, நகரம்", village: "அருணாசலபுரம்", areas: "பெருமாள்கோவில் முடுக்குத்தெரு; பிள்ளையார் கோவில் தெரு; முள்ளிக்குளம் மெயின் ரோடு", lat: 9.215, lng: 77.415 },
  { slNo: 25, boothNo: 206, boothName: "பஞ்சாயத்து யூனியன் ஜவஹர் நடுநிலைப்பள்ளி, கிழக்கு கட்டிடம், நகரம்", village: "அருணாசலபுரம்", areas: "மேட்டுப் பச்சேரி; மேட்டுப் பச்சேரி காலணி; துரைசாமியாபுரம் காலனி", lat: 9.215, lng: 77.415 },
  { slNo: 26, boothNo: 212, boothName: "பஞ்சாயத்து யூனியன் ஆரம்பபள்ளி, வடக்கு பகுதி, ஆண்டார்குளம்", village: "அருணாசலபுரம்", areas: "வடக்குத் தெரு; தெற்குத் தெரு; சொர்ண நகர்; பிள்ளையார் கோவில் தெரு; நடுத் தெரு", lat: 9.215, lng: 77.415 },
  { slNo: 27, boothNo: 203, boothName: "டி.டி.டி.ஏ.ஆரம்பபள்ளி, தலைவன்கோட்டை", village: "பெரியசாமியாபுரம்", areas: "சி.எஸ்.ஐ. கோவில் தெரு; வ.உ.சி 1ம், 2ம் தெரு; அம்பேத்கார் 1-ம் தெரு", lat: 9.205, lng: 77.425 },
  { slNo: 28, boothNo: 215, boothName: "டி.டி.டி.ஏ. நடுநிலைப்பள்ளி, தெற்கு கட்டிடம், மாங்குடி", village: "பெரியசாமியாபுரம்", areas: "மாரியம்மன் கோவில்தெரு; வாட்டர் டேங் தெரு; அம்மன் கோவில்தெரு; சண்முகவேல் தெரு", lat: 9.205, lng: 77.425 },
  { slNo: 29, boothNo: 210, boothName: "ஆர்.சி.ஆரம்பப்பள்ளி, புதிய கட்டிடம், இராமசாமியாபுரம்", village: "குடம்புக்குளம்", areas: "தென்வடல் தெரு; வடக்குத்தெரு; ஆர்.சி தெரு; நடுத் தெரு; தெற்குத் தெரு", lat: 9.27, lng: 77.36 },
  { slNo: 30, boothNo: 214, boothName: "ஆர்.சி.ஆரம்பப்பள்ளி, புதிய கட்டிடம், வெள்ளக்கவுண்டன்பட்டி", village: "குடம்புக்குளம்", areas: "ஆர்.சி.கோவில் தெரு; நடுத் தெரு; தெற்குத் தெரு; இந்திரா காலணி; அருந்ததியர் தெரு", lat: 9.27, lng: 77.36 },
  { slNo: 31, boothNo: 211, boothName: "சி.எம்.எம்.எல். ஆரம்பப்பள்ளி, வடமலாபுரம்", village: "வடமலாபுரம்", areas: "8-1 வது வடக்கு தெரு; கிழக்குத் தெரு; நடுத் தெரு; பிள்ளையார் கோவில் தெரு; காலணித் தெரு", lat: 9.28, lng: 77.35 },
  { slNo: 32, boothNo: 213, boothName: "யாதவா ஆரம்பப்பள்ளி, முத்துசாமியாபுரம்", village: "கே.வி. முத்துசாமியாபுரம்", areas: "பிள்ளையார் கோவில் தெரு; தெற்குத் தெரு; கிழக்குத் தெரு; காலணி மேலத் தெரு; பள்ளிக்கூடத் தெரு", lat: 9.23, lng: 77.385 },
];

export const villages: Village[] = [
  { name: "திருவேட்டநல்லூர்", boothCount: 9, lat: 9.235, lng: 77.395, booths: [18,19,20,21,59,60,61,62,93] },
  { name: "கீழ திருவேட்டநல்லூர்", boothCount: 0, lat: 9.232, lng: 77.398, booths: [] },
  { name: "வெற்றம்பட்டி", boothCount: 0, lat: 9.228, lng: 77.405, booths: [] },
  { name: "பாம்பு கோவில்", boothCount: 9, lat: 9.24, lng: 77.39, booths: [84,85,86,91,94,96,99,208,209] },
  { name: "புனைவனம்", boothCount: 0, lat: 9.245, lng: 77.385, booths: [] },
  { name: "பாரைக்குளம்", boothCount: 0, lat: 9.25, lng: 77.38, booths: [] },
  { name: "அரியநாயகிபுரம்", boothCount: 0, lat: 9.22, lng: 77.41, booths: [] },
  { name: "அருணாசலபுரம்", boothCount: 5, lat: 9.215, lng: 77.415, booths: [97,204,205,206,212] },
  { name: "அச்சம்பட்டி", boothCount: 0, lat: 9.21, lng: 77.42, booths: [] },
  { name: "பெரியசாமியாபுரம்", boothCount: 2, lat: 9.205, lng: 77.425, booths: [203,215] },
  { name: "வடநத்தம்பட்டி", boothCount: 0, lat: 9.255, lng: 77.375, booths: [] },
  { name: "வீரசிகாமணி", boothCount: 0, lat: 9.26, lng: 77.37, booths: [] },
  { name: "கீழ வீரசிகாமணி", boothCount: 0, lat: 9.258, lng: 77.372, booths: [] },
  { name: "கே.வி. ஆலங்குளம்", boothCount: 0, lat: 9.265, lng: 77.365, booths: [] },
  { name: "குடம்புக்குளம்", boothCount: 2, lat: 9.27, lng: 77.36, booths: [210,214] },
  { name: "பொய்கை மேடு", boothCount: 0, lat: 9.275, lng: 77.355, booths: [] },
  { name: "கே.வி. முத்துசாமியாபுரம்", boothCount: 1, lat: 9.23, lng: 77.385, booths: [213] },
  { name: "வடமலாபுரம்", boothCount: 1, lat: 9.28, lng: 77.35, booths: [211] },
  { name: "வடக்கு ஆலங்குளம்", boothCount: 0, lat: 9.268, lng: 77.363, booths: [] },
  { name: "நொச்சிக்குளம்", boothCount: 0, lat: 9.285, lng: 77.345, booths: [] },
  { name: "தெற்கு புதூர்", boothCount: 3, lat: 9.2, lng: 77.43, booths: [95,98,207] },
  { name: "வடக்கு புதூர்", boothCount: 0, lat: 9.203, lng: 77.428, booths: [] },
  { name: "எருமன் குளம்", boothCount: 0, lat: 9.195, lng: 77.435, booths: [] },
  { name: "வீரிருப்பு", boothCount: 0, lat: 9.19, lng: 77.44, booths: [] },
];

// 20-day route plan - covering all villages multiple times with focus on booth-heavy villages
export const routePlan: RouteDay[] = [
  { day: 1, stops: [
    { order: 1, village: "திருவேட்டநல்லூர்", distance: 0, lat: 9.235, lng: 77.395 },
    { order: 2, village: "கீழ திருவேட்டநல்லூர்", distance: 0.5, lat: 9.232, lng: 77.398 },
    { order: 3, village: "வெற்றம்பட்டி", distance: 0.9, lat: 9.228, lng: 77.405 },
    { order: 4, village: "அரியநாயகிபுரம்", distance: 1, lat: 9.22, lng: 77.41 },
    { order: 5, village: "அருணாசலபுரம்", distance: 0.8, lat: 9.215, lng: 77.415 },
    { order: 6, village: "அச்சம்பட்டி", distance: 0.8, lat: 9.21, lng: 77.42 },
    { order: 7, village: "பெரியசாமியாபுரம்", distance: 0.8, lat: 9.205, lng: 77.425 },
    { order: 8, village: "வடக்கு புதூர்", distance: 0.4, lat: 9.203, lng: 77.428 },
  ]},
  { day: 2, stops: [
    { order: 1, village: "தெற்கு புதூர்", distance: 0, lat: 9.2, lng: 77.43 },
    { order: 2, village: "எருமன் குளம்", distance: 0.8, lat: 9.195, lng: 77.435 },
    { order: 3, village: "வீரிருப்பு", distance: 0.8, lat: 9.19, lng: 77.44 },
    { order: 4, village: "கே.வி. முத்துசாமியாபுரம்", distance: 7.5, lat: 9.23, lng: 77.385 },
    { order: 5, village: "பாம்பு கோவில்", distance: 1.2, lat: 9.24, lng: 77.39 },
    { order: 6, village: "புனைவனம்", distance: 0.8, lat: 9.245, lng: 77.385 },
    { order: 7, village: "பாரைக்குளம்", distance: 0.8, lat: 9.25, lng: 77.38 },
    { order: 8, village: "வடநத்தம்பட்டி", distance: 0.8, lat: 9.255, lng: 77.375 },
  ]},
  { day: 3, stops: [
    { order: 1, village: "கீழ வீரசிகாமணி", distance: 0, lat: 9.258, lng: 77.372 },
    { order: 2, village: "வீரசிகாமணி", distance: 0.3, lat: 9.26, lng: 77.37 },
    { order: 3, village: "கே.வி. ஆலங்குளம்", distance: 0.8, lat: 9.265, lng: 77.365 },
    { order: 4, village: "வடக்கு ஆலங்குளம்", distance: 0.4, lat: 9.268, lng: 77.363 },
    { order: 5, village: "குடம்புக்குளம்", distance: 0.4, lat: 9.27, lng: 77.36 },
    { order: 6, village: "பொய்கை மேடு", distance: 0.8, lat: 9.275, lng: 77.355 },
    { order: 7, village: "வடமலாபுரம்", distance: 0.8, lat: 9.28, lng: 77.35 },
    { order: 8, village: "நொச்சிக்குளம்", distance: 0.8, lat: 9.285, lng: 77.345 },
  ]},
  { day: 4, stops: [
    { order: 1, village: "திருவேட்டநல்லூர்", distance: 0, lat: 9.235, lng: 77.395 },
    { order: 2, village: "பாம்பு கோவில்", distance: 1.2, lat: 9.24, lng: 77.39 },
    { order: 3, village: "அருணாசலபுரம்", distance: 3.5, lat: 9.215, lng: 77.415 },
    { order: 4, village: "தெற்கு புதூர்", distance: 2.0, lat: 9.2, lng: 77.43 },
  ]},
  { day: 5, stops: [
    { order: 1, village: "பெரியசாமியாபுரம்", distance: 0, lat: 9.205, lng: 77.425 },
    { order: 2, village: "அச்சம்பட்டி", distance: 0.8, lat: 9.21, lng: 77.42 },
    { order: 3, village: "அரியநாயகிபுரம்", distance: 1.0, lat: 9.22, lng: 77.41 },
    { order: 4, village: "கே.வி. முத்துசாமியாபுரம்", distance: 3.0, lat: 9.23, lng: 77.385 },
    { order: 5, village: "குடம்புக்குளம்", distance: 4.5, lat: 9.27, lng: 77.36 },
  ]},
  { day: 6, stops: [
    { order: 1, village: "வடமலாபுரம்", distance: 0, lat: 9.28, lng: 77.35 },
    { order: 2, village: "நொச்சிக்குளம்", distance: 0.8, lat: 9.285, lng: 77.345 },
    { order: 3, village: "பொய்கை மேடு", distance: 1.5, lat: 9.275, lng: 77.355 },
    { order: 4, village: "வடக்கு ஆலங்குளம்", distance: 1.0, lat: 9.268, lng: 77.363 },
    { order: 5, village: "கே.வி. ஆலங்குளம்", distance: 0.4, lat: 9.265, lng: 77.365 },
  ]},
  { day: 7, stops: [
    { order: 1, village: "வீரசிகாமணி", distance: 0, lat: 9.26, lng: 77.37 },
    { order: 2, village: "கீழ வீரசிகாமணி", distance: 0.3, lat: 9.258, lng: 77.372 },
    { order: 3, village: "வடநத்தம்பட்டி", distance: 0.5, lat: 9.255, lng: 77.375 },
    { order: 4, village: "பாரைக்குளம்", distance: 0.8, lat: 9.25, lng: 77.38 },
    { order: 5, village: "புனைவனம்", distance: 0.8, lat: 9.245, lng: 77.385 },
  ]},
  { day: 8, stops: [
    { order: 1, village: "திருவேட்டநல்லூர்", distance: 0, lat: 9.235, lng: 77.395 },
    { order: 2, village: "கீழ திருவேட்டநல்லூர்", distance: 0.5, lat: 9.232, lng: 77.398 },
    { order: 3, village: "வெற்றம்பட்டி", distance: 0.9, lat: 9.228, lng: 77.405 },
    { order: 4, village: "பாம்பு கோவில்", distance: 2.0, lat: 9.24, lng: 77.39 },
  ]},
  { day: 9, stops: [
    { order: 1, village: "அருணாசலபுரம்", distance: 0, lat: 9.215, lng: 77.415 },
    { order: 2, village: "அரியநாயகிபுரம்", distance: 0.8, lat: 9.22, lng: 77.41 },
    { order: 3, village: "வடக்கு புதூர்", distance: 2.5, lat: 9.203, lng: 77.428 },
    { order: 4, village: "தெற்கு புதூர்", distance: 0.4, lat: 9.2, lng: 77.43 },
    { order: 5, village: "எருமன் குளம்", distance: 0.8, lat: 9.195, lng: 77.435 },
  ]},
  { day: 10, stops: [
    { order: 1, village: "வீரிருப்பு", distance: 0, lat: 9.19, lng: 77.44 },
    { order: 2, village: "பெரியசாமியாபுரம்", distance: 3.0, lat: 9.205, lng: 77.425 },
    { order: 3, village: "அச்சம்பட்டி", distance: 0.8, lat: 9.21, lng: 77.42 },
    { order: 4, village: "கே.வி. முத்துசாமியாபுரம்", distance: 4.0, lat: 9.23, lng: 77.385 },
  ]},
  { day: 11, stops: [
    { order: 1, village: "பாம்பு கோவில்", distance: 0, lat: 9.24, lng: 77.39 },
    { order: 2, village: "திருவேட்டநல்லூர்", distance: 1.2, lat: 9.235, lng: 77.395 },
    { order: 3, village: "அருணாசலபுரம்", distance: 3.0, lat: 9.215, lng: 77.415 },
  ]},
  { day: 12, stops: [
    { order: 1, village: "குடம்புக்குளம்", distance: 0, lat: 9.27, lng: 77.36 },
    { order: 2, village: "வடமலாபுரம்", distance: 0.8, lat: 9.28, lng: 77.35 },
    { order: 3, village: "பொய்கை மேடு", distance: 0.8, lat: 9.275, lng: 77.355 },
    { order: 4, village: "வடக்கு ஆலங்குளம்", distance: 1.0, lat: 9.268, lng: 77.363 },
  ]},
  { day: 13, stops: [
    { order: 1, village: "தெற்கு புதூர்", distance: 0, lat: 9.2, lng: 77.43 },
    { order: 2, village: "வடக்கு புதூர்", distance: 0.4, lat: 9.203, lng: 77.428 },
    { order: 3, village: "பெரியசாமியாபுரம்", distance: 0.5, lat: 9.205, lng: 77.425 },
    { order: 4, village: "அருணாசலபுரம்", distance: 1.5, lat: 9.215, lng: 77.415 },
  ]},
  { day: 14, stops: [
    { order: 1, village: "திருவேட்டநல்லூர்", distance: 0, lat: 9.235, lng: 77.395 },
    { order: 2, village: "பாம்பு கோவில்", distance: 1.2, lat: 9.24, lng: 77.39 },
    { order: 3, village: "புனைவனம்", distance: 0.8, lat: 9.245, lng: 77.385 },
    { order: 4, village: "வீரசிகாமணி", distance: 2.0, lat: 9.26, lng: 77.37 },
  ]},
  { day: 15, stops: [
    { order: 1, village: "கே.வி. ஆலங்குளம்", distance: 0, lat: 9.265, lng: 77.365 },
    { order: 2, village: "கீழ வீரசிகாமணி", distance: 1.0, lat: 9.258, lng: 77.372 },
    { order: 3, village: "வடநத்தம்பட்டி", distance: 0.5, lat: 9.255, lng: 77.375 },
    { order: 4, village: "பாரைக்குளம்", distance: 0.8, lat: 9.25, lng: 77.38 },
  ]},
  { day: 16, stops: [
    { order: 1, village: "எருமன் குளம்", distance: 0, lat: 9.195, lng: 77.435 },
    { order: 2, village: "வீரிருப்பு", distance: 0.8, lat: 9.19, lng: 77.44 },
    { order: 3, village: "தெற்கு புதூர்", distance: 3.5, lat: 9.2, lng: 77.43 },
    { order: 4, village: "அச்சம்பட்டி", distance: 1.5, lat: 9.21, lng: 77.42 },
  ]},
  { day: 17, stops: [
    { order: 1, village: "அருணாசலபுரம்", distance: 0, lat: 9.215, lng: 77.415 },
    { order: 2, village: "திருவேட்டநல்லூர்", distance: 3.0, lat: 9.235, lng: 77.395 },
    { order: 3, village: "கே.வி. முத்துசாமியாபுரம்", distance: 1.5, lat: 9.23, lng: 77.385 },
    { order: 4, village: "பாம்பு கோவில்", distance: 1.2, lat: 9.24, lng: 77.39 },
  ]},
  { day: 18, stops: [
    { order: 1, village: "குடம்புக்குளம்", distance: 0, lat: 9.27, lng: 77.36 },
    { order: 2, village: "நொச்சிக்குளம்", distance: 2.0, lat: 9.285, lng: 77.345 },
    { order: 3, village: "வடமலாபுரம்", distance: 0.8, lat: 9.28, lng: 77.35 },
    { order: 4, village: "பொய்கை மேடு", distance: 0.8, lat: 9.275, lng: 77.355 },
  ]},
  { day: 19, stops: [
    { order: 1, village: "பெரியசாமியாபுரம்", distance: 0, lat: 9.205, lng: 77.425 },
    { order: 2, village: "வடக்கு புதூர்", distance: 0.4, lat: 9.203, lng: 77.428 },
    { order: 3, village: "அரியநாயகிபுரம்", distance: 2.5, lat: 9.22, lng: 77.41 },
    { order: 4, village: "வெற்றம்பட்டி", distance: 1.0, lat: 9.228, lng: 77.405 },
    { order: 5, village: "கீழ திருவேட்டநல்லூர்", distance: 0.5, lat: 9.232, lng: 77.398 },
  ]},
  { day: 20, stops: [
    { order: 1, village: "திருவேட்டநல்லூர்", distance: 0, lat: 9.235, lng: 77.395 },
    { order: 2, village: "பாம்பு கோவில்", distance: 1.2, lat: 9.24, lng: 77.39 },
    { order: 3, village: "அருணாசலபுரம்", distance: 3.5, lat: 9.215, lng: 77.415 },
    { order: 4, village: "தெற்கு புதூர்", distance: 2.0, lat: 9.2, lng: 77.43 },
    { order: 5, village: "குடம்புக்குளம்", distance: 8.0, lat: 9.27, lng: 77.36 },
    { order: 6, village: "வடமலாபுரம்", distance: 0.8, lat: 9.28, lng: 77.35 },
  ]},
];
