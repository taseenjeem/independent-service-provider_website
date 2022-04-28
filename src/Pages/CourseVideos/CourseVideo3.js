import React from 'react';

const CourseVideo3 = () => {
    return (
        <div>
            <div>

                <div className="py-8 bg-gradient-to-br from-blue-300 to-indigo-600 text-white">
                    <h1 className="text-3xl md:text-5xl font-bold text-center leading-relaxed md:leading-snug">
                        The professional gears you need.
                    </h1>

                    <div className="flex w-full h-screen justify-center pt-12 pb-36">
                        <iframe className=" w-5/6 h-full border-8 rounded-xl border-white" src="https://www.youtube.com/embed/10mx4IKXmzs"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseVideo3;