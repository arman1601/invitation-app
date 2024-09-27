import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';

// Импортируем компоненты шаблонов динамически
const Template1 = React.lazy(() => import('./template-1/Template1')); // Убедись, что путь к компоненту верный
// Добавь дополнительные шаблоны по мере необходимости

const InvitationTemplatePage = () => {
    const { id } = useParams(); // Получаем ID из URL
    const [templateComponent, setTemplateComponent] = useState(null);

    useEffect(() => {
        // Определяем, какой компонент загружать на основе ID
        switch (id) {
            case 'template1':
                setTemplateComponent(<Template1 />);
                break;
            case 'template2':
                setTemplateComponent(<div>template2</div>);
                break;
            // Добавь дополнительные кейсы для других шаблонов
            default:
                setTemplateComponent(<div>Шаблон не найден</div>);
                break;
        }
    }, [id]);

    return (
        <div>
            <Suspense fallback={<div>Загрузка шаблона...</div>}>
                {templateComponent}
            </Suspense>
        </div>
    );
};

export default InvitationTemplatePage;
