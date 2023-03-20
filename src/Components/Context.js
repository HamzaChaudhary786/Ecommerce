import React, { useContext, useState, useEffect, useReducer } from "react";
import reducer from "../Components/Reducer/DataReducer";
const ContextApp = React.createContext();


// const api_url = ` https://apidata1.herokuapp.com/apidata`;
const api_url = ` http://localhost:3001/shopping`;

const initialState = {
    data: [],
    SingleProduct: {}
}

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
    const [card, setCard] = useState([])
    const [m_trouser, setM_Trouser]=useState([]);
   
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProject = async (url) => {


        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type:"SET_API_DATA",
                payload:data
            })
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
                setCard(data.Freelancer_Card);
                setM_Trouser(data.M_Trouser_Short);

            }
            else {
                console.log("Error Accurs");
            }




        }
        catch (error) {
            console.log("error");

        }

    }

    const getSingleProduct = async () => {
        try {

            // const res = await fetch(url);
            // const SingleProduct = await res.json();


        } catch (error) {

        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getProject(`${api_url}`);

        }, 3000);

        return () => clearTimeout(timerOut);
    }, [query]);




    return (
        <ContextApp.Provider value={{ ...state, shoping, query, setQuery, men, women, womenteeshirt, hood, jacket, casual, polo, mteeshirt, card ,m_trouser }}>
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

