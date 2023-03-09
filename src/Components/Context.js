import React, { useContext, useState, useEffect } from "react";

const ContextApp = React.createContext();


// const api_url = ` https://apidata1.herokuapp.com/apidata`;
const api_url = ` http://localhost:3001/shopping`;

const AppProvider = (({ children }) => {

    const [shoping, setShoping] = useState([]);
    const [query, setQuery] = useState("");
    const [men, setMen] = useState([]);
    const [women, setWomen] = useState([]);
    const [womenteeshirt, setWomenTeeShirt] = useState([]);
    const [hood, setHood] = useState([]);
    const [jacket, setJacket] = useState([])
    const [casual, setCasual] = useState([])
    const [polo, setPolo] = useState([])
    const [mteeshirt, setMTeeShirt] = useState([])

    const getProject = async (url) => {

        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            if (data.Response === "True") {
                setShoping(data.Ecommerce);
                setMen(data.Mens);
                setWomen(data.Womens_Trouser);
                setWomenTeeShirt(data.Womens_TeeShirt);
                setHood(data.Hoodie);
                setJacket(data.Jackets);
                setCasual(data.Casual);
                setPolo(data.Polo);
                setMTeeShirt(data.MenTeeShirt);

            }
            else {
                console.log("Error Accurs");
            }




        }
        catch (error) {
            console.log("error");

        }

    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getProject(`${api_url}`);

        }, 3000);

        return () => clearTimeout(timerOut);
    }, [query]);




    return (
        <ContextApp.Provider value={{ shoping, query, setQuery, men, women, womenteeshirt, hood, jacket , casual,polo ,mteeshirt }}>
            {children}
        </ContextApp.Provider>
    )

})


const useGlobalContext = () => {
    return (
        useContext(ContextApp)
    )
}

export { AppProvider, ContextApp, useGlobalContext };

