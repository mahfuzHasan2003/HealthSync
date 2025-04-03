import { getCollection } from '@/lib/db';

export async function POST(req) {
  try {
    const { name } = await req.json();
    console.log(name);
    const collection = await getCollection('test');
    const doc1 = {
      name: 'Dr. Sarah Smith',
      specialty: 'Dermatologist',
      yearsOfExperience: 8,
      contact: {
        phone: '+1 987 654 321',
        email: 'sarah.smith@example.com',
        address: '456 Skin Care Ave, Townsville, USA',
      },
      availability: [
        {
          day: 'Tuesday',
          time: '10:00 AM - 04:00 PM',
        },
        {
          day: 'Thursday',
          time: '10:00 AM - 03:00 PM',
        },
      ],
      ratings: 4.6,
      profilePicture: 'https://example.com/images/sarah-smith.jpg',
      achievements: [
        {
          year: '2018 - 2019',
          award: 'Best Dermatologist Award',
        },
        {
          year: '2020 - 2021',
          award: 'Top Clinical Researcher Award',
        },
        {
          year: '2022 - 2023',
          award: 'Excellence in Patient Care Award',
        },
        {
          year: '2024 - 2025',
          award: 'Top Medical Specialist in Dermatology',
        },
      ],
      professionalSkills: [
        {
          skill: 'Successful Surgery',
          percentage: 90,
        },
        {
          skill: 'Satisfied Patients',
          percentage: 75,
        },
        {
          skill: 'Skin Care Treatment',
          percentage: 95,
        },
      ],
      education: [
        {
          degree: 'MBBS',
          institution: 'Harvard Medical School',
        },
        {
          degree: 'Dermatology Residency',
          institution: 'Mayo Clinic',
        },
        {
          degree: 'Management Studies',
          institution: 'Cambridge University',
        },
      ],
      socialLinks: {
        facebook: 'https://facebook.com/sarahsmith',
        instagram: 'https://instagram.com/sarahsmith',
        twitter: 'https://twitter.com/sarahsmith',
        linkedin: 'https://linkedin.com/in/sarahsmith',
      },
    };
    const doc2 = {
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      yearsOfExperience: 10,
      contact: {
        phone: '+1 234 567 890',
        email: 'john.doe@example.com',
        address: '123 Health St, Cityville, USA',
      },
      availability: [
        {
          day: 'Monday',
          time: '09:00 AM - 05:00 PM',
        },
        {
          day: 'Wednesday',
          time: '09:00 AM - 12:00 PM',
        },
      ],
      ratings: 4.8,
      profilePicture: 'https://example.com/images/john-doe.jpg',
      achievements: [
        {
          year: '2018 - 2019',
          award: 'William Allan Award',
        },
        {
          year: '2020 - 2021',
          award: 'Top Medical Resigning Star Award',
        },
        {
          year: '2022 - 2023',
          award: 'Mother Philips Award',
        },
        {
          year: '2024 - 2025',
          award: 'Institute of Top Medication Award',
        },
        {
          year: '2017 - 2018',
          award: 'Harvard University Award',
        },
        {
          year: '2016 - 2017',
          award: 'Best Doctor Award',
        },
      ],
      professionalSkills: [
        {
          skill: 'Successful Surgery',
          percentage: 85,
        },
        {
          skill: 'Satisfied Patients',
          percentage: 50,
        },
        {
          skill: 'Infection Prevention',
          percentage: 95,
        },
      ],
      education: [
        {
          degree: 'MBBS',
          institution: 'University of California',
        },
        {
          degree: 'Medical Studies',
          institution: 'Medify Institute of Medicine',
        },
        {
          degree: 'Management',
          institution: 'Juzment School of Management, Cambridge',
        },
        {
          degree: 'High School Diploma',
          institution: 'The Syntify High School Of New York',
        },
      ],
      socialLinks: {
        facebook: 'https://facebook.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
    };

    const result1 = await collection.insertOne(doc1);
    const result2 = await collection.insertOne(doc2);

    // const result = await collection.insertOne({ name });
    return new Response(
      JSON.stringify({ data: result1, message: 'Data inserted successfully' }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to insert data into database' }),
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const collection = await getCollection('test');
    const result = await collection.find().toArray();
    return new Response(JSON.stringify({ data: result }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch data from database' }),
      {
        status: 500,
      }
    );
  }
