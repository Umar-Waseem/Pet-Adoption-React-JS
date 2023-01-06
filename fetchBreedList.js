const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    if (!animal) {
        return [];
    }

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

    const json = await apiRes.json();

    if (!apiRes.ok) {
        throw new Error(`${json.message} ${apiRes.status}`);
    }

    return json;
}

export default fetchBreedList;