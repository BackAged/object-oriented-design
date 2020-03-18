// Subtypes must be substitutable for their base types.
// Never Inherits and hack which behaves inconsistenty

// rather use interface or abstract class
// which would be consistent


abstract class Device {
    abstract  play(): void
}

class Tv extends Device {
    play(): void {
        this.videoPlay(); // this makes the subtype substitutible with base type
    }

    videoPlay(): void {
        console.log("playing video....");
    }
}

class Radio extends Device {
    play(): void {
        this.audioPlay();
    }

    audioPlay(): void {
        console.log("playing audio...");
    }
}