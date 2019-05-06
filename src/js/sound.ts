export class Sound {

    file: HTMLAudioElement;

    constructor(path: string) {
        this.file = new Audio(`/audio/${path}.mp3`);
    }
    
    play() {
        this.file.play();
    };

}