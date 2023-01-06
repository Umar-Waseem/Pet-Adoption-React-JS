const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    const json = await apiRes.json();

    if(!apiRes.ok){
        throw new Error(`${json.message} ${apiRes.status}`);
    }

    return json;
}

export default fetchPet;