async function fetchSearch({ queryKey }) {
    const { animal, location, breed } = queryKey[1];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

    const json = await apiRes.json();

    if (!apiRes.ok) {
        throw new Error(`${json.message} ${apiRes.status} \n Pet search ${animal} ${location} ${breed} is failed`);
    }
    return json;
}

export default fetchSearch;