import { JobType } from '@/types';
import { JobFilterParams } from './shared.types';

function convertJobsResponseData(
  data: Array<{
    id?: string;
    employer_name?: string;
    employer_logo?: string | undefined;
    employer_website?: string;
    job_employment_type?: string;
    job_title?: string;
    job_description?: string;
    job_apply_link?: string;
    job_city?: string;
    job_state?: string;
    job_country?: string;
  }>
): JobType[] {
  return data.map((item) => ({
    id: item.id,
    employerName: item.employer_name,
    employerLogo: item.employer_logo,
    employerWebsite: item.employer_website,
    employmentType: item.job_employment_type,
    title: item.job_title,
    description: item.job_description,
    applyLink: item.job_apply_link,
    city: item.job_city,
    state: item.job_state,
    country: item.job_country,
  }));
}

export async function fetchLocation() {
  const response = await fetch('http://ip-api.com/json/?fields=country');
  const location = await response.json();
  return location.country;
}

export async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchJobs(filters: JobFilterParams) {
  const { query, page } = filters;

  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY ?? '',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  };

  const response = await fetch(
    `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}`,
    {
      headers,
    }
  );

  const result = await response.json();

  return convertJobsResponseData(result.data);
}
