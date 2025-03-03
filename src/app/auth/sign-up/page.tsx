import { ReactElement } from "react";

import SignUpFormComponent from "../components/sign-up-form/sign-up-form.component";

import styles from "./page.module.css";

const Page = (): ReactElement => {
    return (
        <div className={styles.page}>
            <SignUpFormComponent />
        </div>
    )
}

export default Page;
