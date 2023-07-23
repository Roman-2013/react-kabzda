import React, {useCallback, useMemo, useState} from 'react';

export const UseMemoUseCallbackLesson = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1


    resultA = useMemo(() => {

        let temp = 1
        for (let i = 1; i <= a; i++) {
            let facke = 0
            while (facke < 1000000) {
                facke++
                const fackeValue = Math.random()
            }
            temp *= i
        }
        return temp
    }, [a])

    for (let i = 1; i <= b; i++) {

        resultB *= i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                result for a:{resultA}
            </div>
            <div>
                result for b:{resultB}
            </div>
            <hr/>
            {/*next lesson*/}
            <div>
                <LikeUseCallback/>
            </div>
        </div>
    );
};
//---------------------------------------------LESSON IN USECALLBACK----------------------------------

export const LikeUseCallback = () => {
    console.log('helpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'js', 'css', 'html'])

    // const newArray = useMemo(() => {
    //     const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
    //     return newArray
    // }, [books])



    const memoizedAddbook=useMemo(()=>{
        return () => {
            console.log(books)
            const newUsers = [...books, 'angular']
            setBooks(newUsers)
        }
    },[books])

    const memoizedAddbook2=useCallback(()=>{
            console.log(books)
            const newUsers = [...books, 'angular']
            setBooks(newUsers)

    },[books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddbook2}/>
    </>
}


const BooksSecret = (props: { books?: Array<string>, addBook: () => void }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {/*{props.books.map((book, id) => <div key={id}>{book}</div>)}*/}
    </div>
}

const Book = React.memo(BooksSecret)