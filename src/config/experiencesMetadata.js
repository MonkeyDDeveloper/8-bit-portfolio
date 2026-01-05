/**
 * Metadata complementaria para experiencias profesionales (mapeada por ID de API)
 * INSTRUCCIONES: Llenar company, location, tech, level según tus experiencias reales
 */
export const experiencesMetadata = {
    1: {
        company: '', // TODO: Nombre de la empresa ej. 'MonkeyDDevelopment'
        location: 'Remote (From Ecuador)', // TODO: Ubicación ej. 'Remote' o 'Guatemala'
        tech: [], // TODO: Tecnologías usadas ej. ['Vue.js', 'Node.js', 'Docker']
        variant: 'default', // default | secondary | accent | warning | ghost
        level: 'EPIC', // LEGENDARY | EPIC | RARE | COMMON
    },
    2: {
        company: '',
        location: 'Remote (From Ecuador)',
        tech: [],
        variant: 'secondary',
        level: 'EPIC',
    },
    3: {
        company: '',
        location: 'Remote (From Ecuador)',
        tech: [],
        variant: 'ghost',
        level: 'COMMON',
    },
    4: {
        company: '',
        location: 'Remote (From Ecuador)',
        tech: [],
        variant: 'secondary',
        level: 'EPIC',
    },
    5: {
        company: '',
        location: 'Remote (From Ecuador)',
        tech: [],
        variant: 'warning',
        level: 'LEGENDARY',
    }
};

export const defaultExperienceMetadata = {
  company: 'Unknown Company',
  location: 'Remote',
  tech: [],
  variant: 'default',
  level: 'COMMON',
};
