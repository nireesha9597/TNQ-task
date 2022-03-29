async function data(){
    const res =await fetch('fet.json')
    const niru =await res.json();
    console.log(niru);
}
data()