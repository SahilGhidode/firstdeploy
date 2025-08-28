import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
export default function SingleUser() {

    const val = useParams();

    console.log(val);
    const [user, setUser] = useState({});
    const [load, setLoad] = useState(false);
    const [err, setErr] = useState(false);

    const getData = () => {
        return fetch(`https://reqres.in/api/users/${val.user_id}`, {
            headers: {
                "x-api-key": "reqres-free-v1",
            },

        }).then((res) => res.json());
    };

    const fetchandGetUser = async () => {
        try {
            setLoad(true);
            const data = await getData();
            console.log(data.data);
            setUser(data)
            setLoad(false)

        } catch (error) {
            setErr(true);
            setLoad(false);
            console.log(error)
        }

    }

    useEffect(() => {
        fetchandGetUser();
    }, [])

    if (load) return <h1>Loading....</h1>
    if (err) return <h1>Something went wrong...</h1>
    return (
        <div key={user?.data?.id}
            style={{ border: "1px solid red", margin: "20px", padding: "10px" }}
        >
            <img src={user?.data?.avatar} style={{ width: "300px" }} alt="" />
            <h3>
                Name:{user?.data?.fist_name} {user?.data?.last_name}
            </h3>
            <h4>Id :{user?.data?.id}</h4>
            <h5>Email:{user?.data?.email}</h5>

            <hr />
            <h4>Body :: {user?.support?.text}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat incidunt quis asperiores laborum saepe ad, eius non repellendus praesentium aspernatur architecto voluptas laboriosam nam ducimus fugit mollitia dolores illum facere?</p>

        </div>
    );
}