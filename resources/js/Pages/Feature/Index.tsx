import FeatureItem from '@/Components/FeatureItem';
import RedirectLink from '@/Components/RedirectLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Feature, PaginatedData } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Index({ features }: { features: PaginatedData<Feature> }) {
  return (
    <AuthenticatedLayout
      header={
        <div className='flex justify-between items-center'>
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Features list
          </h2>
          <RedirectLink href={route('feature.create')} >Create new feature</RedirectLink>
        </div>

      }
    >
      <Head title="Features" />

      {features.data.map(feature => (
        <FeatureItem feature={feature} key={feature.id} />
      ))}

    </AuthenticatedLayout>
  );
}
