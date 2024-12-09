
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import RedirectLink from '@/Components/RedirectLink';
import TextareaInput from '@/Components/TextareaInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Create() {
  const user = usePage().props.auth.user;
  const { data, setData, post, errors, processing, recentlySuccessful } =
    useForm({
      name: "",
      description: "",
      user_id: user.id
    });

  const createFeatureForm: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('feature.store'));
  };
  return (
    <AuthenticatedLayout
      header={
        <div className='flex justify-between items-center'>
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Create New Feature
          </h2>
          <RedirectLink href={route('feature.index')}>
            Back
          </RedirectLink>
        </div>

      }
    >
      <Head title="Create new feature" />

      <form onSubmit={createFeatureForm} className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
        <div className='mb-4'>
          <InputLabel htmlFor="name" value="Feature name" />

          <TextInput
            id="name"
            className="mt-1 block w-full"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            required
            isFocused
            autoComplete="name"
          />

          <InputError className="mt-2" message={errors.name} />
        </div>

        <div className='mb-4'>
          <InputLabel htmlFor="description" value="Feature description" />

          <TextareaInput
            id="description"
            rows={6}
            className="mt-1 block w-full"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
          />

          <InputError className="mt-2" message={errors.description} />
        </div>

        <div className="flex items-center gap-4 mt-6">
          <PrimaryButton disabled={processing}>Create freature</PrimaryButton>
        </div>

      </form>
    </AuthenticatedLayout>
  );
}
