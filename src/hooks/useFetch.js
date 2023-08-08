import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl, setCloseForm, setSuccedCreate, setSuccedpdate, setSuccedDelete ) => {
  const [infoApi, setInfoApi] = useState();
  // hay que hacer un get post delete update

  const getApi = (path) => {
    const url = `${baseUrl}${path}/`;
    axios
      .get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.error(err));
  };

  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`;
    axios
      .post(url, data)
      .then((res) => {
        setInfoApi([...infoApi, res.data]);
        setCloseForm(true);
        setSuccedCreate(false)
      })
      .catch((err) => console.error(err));
  };

  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        const infoApiFiltered = infoApi.filter((e) => e.id !== id);
        setInfoApi(infoApiFiltered);
        setSuccedDelete(false)
      })

      .catch((err) => console.error(err));
  };

  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .patch(url, data)
      .then((res) => {
        console.log(res.data);
        const infoApiMapped = infoApi.map((e) => (e.id === id ? res.data : e));
        setInfoApi(infoApiMapped);
        setCloseForm(true);
        setSuccedpdate(false);
      })
      .catch((err) => console.error(err));
  };
  return [infoApi, getApi, postApi, deleteApi, updateApi];
};

export default useFetch;
