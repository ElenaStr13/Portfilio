import './modal.scss';
import Button from '../button/Button';
import { useTranslation } from 'react-i18next';
import useOutsideClick from '../../hooks/useOutsideClick';

export const ModalUser = ({ onClose, isOpen }) => {

    const { ref } = useOutsideClick(onClose);
    const [t] = useTranslation(["translation"]);

    return (<>
        <div ref={ref}>Your data is send</div>
        <Button type="submit" title="Ok" color="Ok" />
    </>)
}

export default ModalUser;
