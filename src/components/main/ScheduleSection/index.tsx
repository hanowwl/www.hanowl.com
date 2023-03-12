import { useState } from 'react';

import { SCHEDULE_LIST } from '@/constant/schedule';

import * as S from './styled';

export const Schedule: React.FC = () => {
  return (
    <S.ScheduleWrapper>
      <S.ScheduleContainer>
        <S.Title>
          학생회는 오늘도 <br />
          새로운 학교를 만들어가고 있습니다
        </S.Title>
        <S.Schedule>
          <S.ScheduleLine />
          <S.ScheduleContentWrapper>
            {SCHEDULE_LIST.map(({ date, content }, index) => (
              <S.ScheduleContentContainer key={index}>
                <S.ScheduleEllipse />
                <div style={{ position: 'relative', bottom: '1.2rem' }}>
                  <S.ScheduleDate>{date}</S.ScheduleDate>
                  <S.ScheduleContent>{content}</S.ScheduleContent>
                </div>
              </S.ScheduleContentContainer>
            ))}
          </S.ScheduleContentWrapper>
        </S.Schedule>
      </S.ScheduleContainer>
    </S.ScheduleWrapper>
  );
};
