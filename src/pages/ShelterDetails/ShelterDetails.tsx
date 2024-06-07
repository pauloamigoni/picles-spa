import styles from "./ShelterDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/users/getUser";
import { useParams } from "react-router-dom";

export function shelterDetails() {

    const { id } = useParams();
    const { data: shelterData } = getUser(id);

    return 'a';

}
