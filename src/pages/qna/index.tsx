import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import { SelectMenuSection } from '@/components';
import { QNA_MENU_LIST } from '@/constant/qnaMenu';
import { QnASection } from '@/components/qna/QnASection';

import * as S from './styled';

export const QnAPage: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const onClick = () => {
    setIsOpened(!isOpened);
  };

  const location = useLocation();

  return (
    <S.QnAContainer>
      <S.Title>자주 묻는 질문</S.Title>
      <S.Menu
        onClick={() => {
          onClick();
        }}
      >
        {QNA_MENU_LIST.filter(({ href }) => location.pathname === `/qna/${href}`)[0].text}
        {isOpened ? <FaChevronUp /> : <FaChevronDown />}
      </S.Menu>
      {isOpened && (
        <SelectMenuSection onClick={onClick} qnaMenuList={QNA_MENU_LIST} location={location} />
      )}
      {QNA_MENU_LIST.filter(({ href }) => location.pathname === `/qna/${href}`)[0].list.map(
        ({ question, answer }, index) => (
          <QnASection key={index} question={question} answer={answer} />
        )
      )}
    </S.QnAContainer>
  );
};
