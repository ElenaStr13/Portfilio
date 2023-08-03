import './table.scss';
import { useTranslation } from 'react-i18next';


function Table() {

    const [t] = useTranslation(["translation"]);

    return <table>
        <thead>
            <tr>
                <th>{t('descriptionServices.table.th1')}</th>
                <th>{t('descriptionServices.table.th2')}</th>
                <th>{t('descriptionServices.table.th3')}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{t('descriptionServices.table.tr1')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr2')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr3')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr4')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr5')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr6')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr7')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr8')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr9')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr10')}</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr11')}</td>
                <td></td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr12')}</td>
                <td></td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr13')}</td>
                <td></td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr14')}</td>
                <td></td>
                <td>✓</td>
            </tr>
            <tr>
                <td>{t('descriptionServices.table.tr15')}</td>
                <td></td>
                <td>✓</td>
            </tr>
        </tbody>
    </table>
}

export default Table;