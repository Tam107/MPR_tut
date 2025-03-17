import React, { useState } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import Timer from './Timer';
import ToggleableTimerForm from './ToggleableTimerForm';

const EditableTimer = ({ timer, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdate = (updatedTimer) => {
        onUpdate(updatedTimer);
        setIsEditing(false);
    };

    return (
        <View style={tw`mb-4`}>
            {isEditing ? (
                <ToggleableTimerForm
                    initialValues={timer}
                    isVisible={true}
                    onSubmit={handleUpdate}
                    onToggle={() => setIsEditing(false)}
                />
            ) : (
                <Timer
                    timer={timer}
                    onEdit={() => setIsEditing(true)}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            )}
        </View>
    );
};

export default EditableTimer;