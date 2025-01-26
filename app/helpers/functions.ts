
import { Platform } from 'react-native';

import Containers from '@app-navigations/containers';
import StorageService from '@app-services/storage.service';

import NavigationHelper from './navigation';
import Storage from './storage';

export const isIOS = Platform.OS === 'ios';


export const formatToCrores = (value) => {
  const crores = value / 1e7;

  return `${crores.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} Cr`;
};

export const calculateAge = (dateOfBirth: any) => {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
};

export const calculateAgeDefference = (dob: any) => {
  const [year, month, day] = dob.split('-').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!isBirthdayPassed) {
    age -= 1;
  }

  return age;
};

export const currencyConverter = (amount: number, currency: string) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const removeCounsellorFromString = (inputString: any) => {
  return inputString.replace(/\bCounsellor\b/g, '').trim();
};

export const goToLogin = async () => {
  await StorageService.remove.removeUser();
  NavigationHelper.reset(Containers.InitialScreen as never);
};


export const getPortfolioAnalyzerUrl = (name: string) => {
  const url = `https://i4edevstorage.blob.core.windows.net/i4e-webiste-images/AMC logos/${name}.png`;

  return url;
};


export const calculateStudentProfileAge = (dateOfBirth: any) => {
  const currentDate: any = new Date();
  const ageInMilliseconds: any = currentDate - new Date(dateOfBirth);
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  const age = Math.floor(ageInYears);

  return age;
};

export const getYearDifference = (startYear, endYear) => {
  return Math.abs(endYear - startYear);
};

export const groupByCategory = (data: any) => {
  return data.reduce((acc: any, scheme: any) => {
    const category = scheme.DPCategoryName;

    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(scheme);
    return acc;
  }, {});
};

export const getLargeDataset = async (key) => {
  try {
    const count = parseInt(await Storage.get(`${key}_chunks_count`), 10);
    const dataset: any = [];

    for (let i = 0; i < count; i++) {
      const chunk = await Storage.get(`${key}_chunk_${i}`);

      if (chunk) {dataset.push(...JSON.parse(chunk));}
    }
    return JSON.stringify(dataset);
  } catch (error) {
    console.error('Error retrieving dataset:', error);
  }
};
