import RecruiterInfo from "../../components/RecruiterInfo/RecruiterInfo";
import StepInfo from "../../components/StepInfo/StepInfo";
import Layout from "../../components/Layout/Layout";
import { stepsInfo, stepToShow } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserTunk } from "../../store/userThunks";

const ProcessPage = () => {
    const dispatch = useDispatch();
    const steps = useSelector(stepsInfo);
    const current = useSelector(stepToShow);
    const { name, description, links } = steps[current] || {};
    useEffect(() => {
        dispatch(getUserTunk());
    }, []);

    return (
        <Layout>
            <RecruiterInfo />
            <StepInfo
                name={name}
                description={description}
                link={links}
            />
        </Layout>
    );
};

export default ProcessPage;
