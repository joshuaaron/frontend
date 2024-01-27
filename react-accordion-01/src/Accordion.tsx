import React, {Fragment, ReactNode, useState} from 'react';

type AccordionProps = {
    defaultOpenIndex?: number;
    allowMultiOpen?: boolean;
};

type AccordionItemProps = {
    index: number;
    isActive: boolean;
    onToggleItem: (index: number) => void;
};

type AccordionItemHeaderProps = {
    title: ReactNode;
} & AccordionItemProps;

type AccordionItemContentProps = {
    children: ReactNode;
} & Omit<AccordionItemProps, 'onToggleItem'>;

const AccordionItemHeader: React.FC<AccordionItemHeaderProps> = ({
    index,
    isActive,
    onToggleItem,
    title,
}) => (
    <button
        className='accordion-item-header'
        data-active-item={isActive}
        onClick={() => onToggleItem(index)}
        aria-expanded={isActive}
        aria-controls={`accordion-item-${index}`}
    >
        {title}
        <i className='toggle-icon' />
    </button>
);
const AccordionItemContent: React.FC<AccordionItemContentProps> = ({index, isActive, children}) => {
    return (
        <div
            className='accordion-item-content'
            id={`accordion-item-${index}`}
            aria-hidden={!isActive}
            data-active-item={isActive}
        >
            {children}
        </div>
    );
};

export const Accordion: React.FC<AccordionProps> = ({allowMultiOpen, defaultOpenIndex = -1}) => {
    const [activeIndices, setActiveIndices] = useState([defaultOpenIndex]);

    const handleToggleItem = (index: number) => {
        if (allowMultiOpen) {
            setActiveIndices((prevIndices) =>
                prevIndices.includes(index)
                    ? prevIndices.filter((i) => i !== index)
                    : [...prevIndices, index]
            );
        } else {
            setActiveIndices((prevIndices) => [prevIndices.includes(index) ? -1 : index]);
        }
    };

    return (
        <div className='accordion'>
            <div className='accordion-header'>
                <h2>Frequently Asked Questions</h2>
                <button className='collapse-all' onClick={() => setActiveIndices([-1])}>
                    Collapse all
                </button>
            </div>
            {items.map(({title, content}, i) => {
                const isActive = activeIndices.includes(i);
                return (
                    <Fragment key={i}>
                        <AccordionItemHeader
                            title={title}
                            index={i}
                            isActive={isActive}
                            onToggleItem={handleToggleItem}
                        />
                        <AccordionItemContent index={i} isActive={isActive}>
                            {content}
                        </AccordionItemContent>
                    </Fragment>
                );
            })}
        </div>
    );
};

const items: {title: ReactNode; content: ReactNode}[] = [
    {
        title: 'Level one',
        content: (
            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quos illum ipsa.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus itaque in
                    laboriosam ratione commodi?
                </p>
            </div>
        ),
    },

    {
        title: 'Level two',
        content: (
            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quos illum ipsa.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quos illum ipsa.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus itaque in
                    laboriosam ratione commodi?
                </p>
            </div>
        ),
    },

    {
        title: 'Level three',
        content: (
            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quos illum ipsa.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus itaque in
                    laboriosam ratione commodi?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus itaque in
                    laboriosam ratione commodi?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quos illum ipsa.
                </p>
            </div>
        ),
    },
];
