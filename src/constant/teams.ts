export interface TeamTextSection {
  title: string;
  text: string;
}

export interface TeamListSection {
  title: string;
  list: string[];
}

export interface TeamSection {
  title: string;
  text?: string;
  list?: string[];
}

export interface Team {
  id: string;
  name: string;
  sections: TeamSection[];
}

export type TeamId = 'DEV' | 'MARKETING' | 'EVENT' | 'SAFETY' | 'GENERAL';

export const TEAM_LIST: Team[] = [
  {
    id: 'dev',
    name: '기능부',
    sections: [
      {
        title: '기능부 소개',
        text: `학생회 기능부는 주로 교내에서 사용할 서비스를 만들어요. 매년 운영되는 한세톤(해커톤),
        한세어울림마당(축제) 등에서 사용될 서비스를 만들고 배포/운영까지 담당해요. 여러
        프로젝트에 참여하면서 기획/디자인/개발/운영 모든 단계에 참여하면서, 경험을 쌓을 수
        있어요. 그리고 기능부는 서로 지식을 공유하고 자극이 되는 관계를 지향해요.`,
      },
      {
        title: '인재상',
        list: [
          '프로젝트 참여에 적극으로 참여할 수 있는 분',
          '스터디/코드리뷰 등 부서 활동에 적극적으로 참여할 수 있는 분',
          '수다쟁이 환영',
        ],
      },
      {
        title: '우대사항',
        list: [
          '프론트엔드/백엔드 개발 경험이 있는 분',
          '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
          'Git/Github 등을 사용하여 버전관리 경험을 해본 분',
        ],
      },
    ],
  },
  {
    id: 'marketing',
    name: '홍보부',
    sections: [
      {
        title: '홍보부 소개',
        text: `학생회 기능부는 주로 교내에서 사용할 서비스를 만들어요. 매년 운영되는 한세톤(해커톤),
        한세어울림마당(축제) 등에서 사용될 서비스를 만들고 배포/운영까지 담당해요. 여러
        프로젝트에 참여하면서 기획/디자인/개발/운영 모든 단계에 참여하면서, 경험을 쌓을 수
        있어요. 그리고 기능부는 서로 지식을 공유하고 자극이 되는 관계를 지향해요.`,
      },
      {
        title: '인재상',
        list: [
          '프로젝트 참여에 적극으로 참여할 수 있는 분',
          '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
          'Git/Github 등을 사용하여 버전관리 경험을 해본 분',
        ],
      },
      {
        title: '우대사항',
        list: [
          '프론트엔드/백엔드 개발 경험이 있는 분',
          '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
          'Git/Github 등을 사용하여 버전관리 경험을 해본 분',
        ],
      },
    ],
  },
  {
    id: 'event',
    name: '행사기획부',
    sections: [
      {
        title: '홍보부 소개',
        text: `학생회 기능부는 주로 교내에서 사용할 서비스를 만들어요. 매년 운영되는 한세톤(해커톤),
        한세어울림마당(축제) 등에서 사용될 서비스를 만들고 배포/운영까지 담당해요. 여러
        프로젝트에 참여하면서 기획/디자인/개발/운영 모든 단계에 참여하면서, 경험을 쌓을 수
        있어요. 그리고 기능부는 서로 지식을 공유하고 자극이 되는 관계를 지향해요.`,
      },
      {
        title: '인재상',
        list: [
          '프로젝트 참여에 적극으로 참여할 수 있는 분',
          '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
          'Git/Github 등을 사용하여 버전관리 경험을 해본 분',
        ],
      },
      {
        title: '우대사항',
        list: [
          '프론트엔드/백엔드 개발 경험이 있는 분',
          '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
          'Git/Github 등을 사용하여 버전관리 경험을 해본 분',
        ],
      },
    ],
  },
  {
    id: 'safety',
    name: '안전부',
    sections: [
      {
        title: '안전부 소개',
        text: `학생회 기능부는 주로 교내에서 사용할 서비스를 만들어요. 매년 운영되는 한세톤(해커톤),
        한세어울림마당(축제) 등에서 사용될 서비스를 만들고 배포/운영까지 담당해요. 여러
        프로젝트에 참여하면서 기획/디자인/개발/운영 모든 단계에 참여하면서, 경험을 쌓을 수
        있어요. 그리고 기능부는 서로 지식을 공유하고 자극이 되는 관계를 지향해요.`,
      },
      {
        title: '인재상',
        list: [
          '프로젝트 참여에 적극으로 참여할 수 있는 분',
          '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
          'Git/Github 등을 사용하여 버전관리 경험을 해본 분',
        ],
      },
      {
        title: '우대사항',
        list: [
          '프론트엔드/백엔드 개발 경험이 있는 분',
          '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
          'Git/Github 등을 사용하여 버전관리 경험을 해본 분',
        ],
      },
    ],
  },
  {
    id: 'general',
    name: '총모부',
    sections: [
      {
        title: '총모부 소개',
        text: `학생회 기능부는 주로 교내에서 사용할 서비스를 만들어요. 매년 운영되는 한세톤(해커톤),
        한세어울림마당(축제) 등에서 사용될 서비스를 만들고 배포/운영까지 담당해요. 여러
        프로젝트에 참여하면서 기획/디자인/개발/운영 모든 단계에 참여하면서, 경험을 쌓을 수
        있어요. 그리고 기능부는 서로 지식을 공유하고 자극이 되는 관계를 지향해요.`,
      },
      {
        title: '인재상',
        list: [
          '프로젝트 참여에 적극으로 참여할 수 있는 분',
          '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
          'Git/Github 등을 사용하여 버전관리 경험을 해본 분',
        ],
      },
      {
        title: '우대사항',
        list: [
          '프론트엔드/백엔드 개발 경험이 있는 분',
          '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
          'Git/Github 등을 사용하여 버전관리 경험을 해본 분',
        ],
      },
    ],
  },
];
