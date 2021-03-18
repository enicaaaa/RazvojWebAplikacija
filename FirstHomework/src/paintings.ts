export class Painting{
    id: number;
    year: number; //year of publication
    name: string;
    artist: string;
    container: HTMLElement;

    constructor(id: number, year: number, name: string, artist: string){
        this.id = id;
        this.year = year;
        this.name = name;
        this.artist = artist;
    }

    showInformation(){
        this.container = document.createElement("div");
        this.container.innerHTML = "Ime:   " +this.name+", Godina:   "+this.year+", Umetnik:   "+this.artist;
        this.container.classList.add("painting");
        this.container.style.color = "rgb(32, 11, 53)";
        this.container.style.fontSize = "large";
        this.container.style.fontFamily = "fantasy";
        this.container.style.border = "2px solid blue";
        this.container.style.textAlign = "center";
        document.body.appendChild(this.container);
    }
}