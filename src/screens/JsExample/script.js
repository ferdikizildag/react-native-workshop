const loadPage = () => {
    // let data = [1, 2, 3];
    // let ad = `Ferdi${data.map((item) => {
    //     return item;
    // })}`
    // let isim = 999 + ''


    const kimlik = {
        ad: "Murat",
        soyad: "Elicaliskan",
        yas: 30,
        isim: function(){
            return generateIsim(this.ad)
        }
    };

    console.log(kimlik.isim())
}
const generateIsim=(ad)=>{
    return ad;
}
const loadPage2 = () => {
    alert('Loaded2')
}

const data = {
    loadPage: loadPage,
    loadPage2: loadPage2
}

export { loadPage, loadPage2 };
export default data;
