const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function query(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data || []; // API returns { success, data, total }
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    throw error;
  }
}

export async function retrieve(endpoint, source_id) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}/${source_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data || []; // API returns { success, data, total }
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    throw error;
  }
}

export const portfolioAPI = {
  getProjects: () => query('/projects/'),
  getCompanyExperienceRelations: () => query('/company-experiences/'),
  getExperience: (experience_id) => retrieve('/experiences', experience_id),
  getCompany: (company_id) => retrieve('/companies', company_id),
};
