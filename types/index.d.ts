import { BADGE_CRITERIA } from '@/constants';

export type SidebarLinkType = {
  imgURL: string;
  route: string;
  label: string;
};

export type JobType = {
  id?: string;
  employerName?: string;
  employerLogo?: string | undefined;
  employerWebsite?: string;
  employmentType?: string;
  title?: string;
  description?: string;
  applyLink?: string;
  city?: string;
  state?: string;
  country?: string;
};

export type CountryType = {
  name: {
    common: string;
  };
};

export type ParamsProps = {
  params: { id: string };
};

export type SearchParamsProps = {
  searchParams: { [key: string]: string | undefined };
};

export type URLProps = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};

export type BadgeCountsType = {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
};

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;
