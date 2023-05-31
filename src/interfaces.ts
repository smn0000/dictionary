interface IPhonetics {
    text?: string;
    audio?: string;
    sourceUrl?: string;
    license?: ILicense
  }
  
  interface IDefinitions {
    definition: string;
    synonyms?: string[];
    example?: string
    antonyms?: string[];
  }
  
  interface IMeaning {
    partOfSpeech: string;
    definitions: IDefinitions[];
    synonyms: string[];
    antonyms?: string[];
  }
  
  interface ILicense {
    name: string;
    url: string;
  }
  
  interface IWord {
    word: string;
    phonetic?: string;
    phonetics: IPhonetics[];
    meanings: IMeaning[];
    license?: ILicense;
    sourceUrls?: string[];
    origin?: string;
  }
  

  interface IErrorResult {
    title: string;
    message: string;
    resolution: string;
  }
