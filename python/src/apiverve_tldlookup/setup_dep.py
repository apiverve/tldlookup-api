from setuptools import setup, find_packages

setup(
    name='apiverve_tldlookup',
    version='1.1.13',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='TLD Lookup retrieves information about any top-level domain including its type (generic, country-code, sponsored) and the sponsoring organization responsible for managing it.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/tldlookup?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
