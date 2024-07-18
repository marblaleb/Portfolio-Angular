export class Tag{
    static readonly ANGULAR= new Tag('Angular', 'red');
    static readonly TYPESCRIPT= new Tag('TypeScript', 'darkred');
    static readonly JAVA= new Tag('Java', 'orange');
    static readonly CS= new Tag('C#', 'green');
    static readonly DOTNET= new Tag('ASP.NET', 'purple');
    static readonly SRPING= new Tag('Spring', 'darkgreen');
    static readonly JAVASCRIPT= new Tag('Javascript', 'gold');
 

    private constructor(private readonly key:string, public readonly color: string ){


    }

    toString(){
        return this.key;
    }
}