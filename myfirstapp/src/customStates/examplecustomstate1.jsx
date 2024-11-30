import useSai from "./customState1";

const CustomState = () => {

  const [increase,reduce] = useSai(handleIncreament,handleDecreament)

    return (
        <>
        <h1>
            Hello
        </h1>
        </>
    )
}

export default CustomState;







