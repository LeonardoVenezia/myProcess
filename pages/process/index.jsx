import RecruiterInfo from "../../components/RecruiterInfo/RecruiterInfo";
import StepInfo from "../../components/StepInfo/StepInfo";
import Layout from "../../components/Layout/Layout";
import { stepsInfo, currentStep } from "../../store/stepsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStepsTunk } from "../../store/stepsThunks";

const ProcessPage = () => {
    const dispatch = useDispatch();
    const steps = useSelector(stepsInfo);
    const current = useSelector(currentStep);
    const { name, description, links } = steps[current] || {};
    useEffect(() => {
        dispatch(getStepsTunk());
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
